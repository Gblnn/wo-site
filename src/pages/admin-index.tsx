import { onAuthStateChanged, signOut, User } from "firebase/auth";
import {
  Globe,
  LayoutDashboard,
  LogOut,
  Plus,
  Settings,
  User as UserIcon,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PageTransition from "../components/page-transition";
import { auth } from "../firebase/config";
import { motion } from "framer-motion";
import Tooltip from "../components/Tooltip";

const styles = `
  @keyframes fadeScale {
    from {
      opacity: 0;
      transform: scale(0.98);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .glass-card {
    background: rgba(26, 26, 26, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    position: relative;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }

  .glass-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    padding: 1px;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.03),
      rgba(234, 88, 12, 0.2),
      rgba(255, 255, 255, 0.03)
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .glass-card:hover::before {
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.05),
      rgba(234, 88, 12, 0.3),
      rgba(255, 255, 255, 0.05)
    );
  }

  /* Add custom color variables if needed */
  :root {
    --primary-color: rgb(234, 88, 12);
    --primary-hover: rgb(194, 65, 12);
  }

  .hover-gradient {
    background: transparent;
    transition: background-color 0.2s;
    position: relative;
    overflow: hidden;
  }

  .hover-gradient::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.2s;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(239, 68, 68, 0) 0%,
      rgba(239, 68, 68, 0.3) 25%,
      rgba(239, 68, 68, 0) 50%
    );
  }

  .hover-gradient:hover::before {
    opacity: 1;
  }
`;

// First, create a custom hook for mouse position
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return { position, updatePosition };
};

// Then update the button component
const GradientButton = ({ children, onClick, className = "" }: any) => {
  const { position, updatePosition } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseMove={updatePosition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden bg-orange-600 ${className}`}
    >
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgb(234, 88, 12) 0%, rgb(194, 65, 12) 50%, rgb(234, 88, 12) 100%)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-center gap-2 w-full">
        {children}
      </div>
    </button>
  );
};

// Add this component after the GradientButton component
const GradientBadge = ({ children }: { children: React.ReactNode }) => {
  const { position, updatePosition } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseMove={updatePosition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden bg-orange-600 px-2 py-1 rounded-full text-xs inline-flex items-center justify-center cursor-default"
    >
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgb(234, 88, 12) 0%, rgb(194, 65, 12) 50%, rgb(234, 88, 12) 100%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </span>
  );
};

// Update the animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70, // Reduced from 100
      damping: 20, // Increased from 15
      mass: 0.8, // Added mass for smoother motion
      duration: 0.7, // Added duration for more control
    },
  },
};

const AdminIndex = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".user-menu")) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const LogoutConfirmationModal = () => (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      style={{
        animation: "fadeScale 0.2s ease-out forwards",
      }}
    >
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
        <h3 className="text-xl font-bold mb-4">Confirm Logout</h3>
        <p className="text-gray-300 mb-6">Are you sure you want to log out?</p>
        <div style={{ border: "" }} className="flex gap-4">
          <button
            onClick={() => setShowLogoutModal(false)}
            className="w-full px-4 py-2 bg-[#2a2a2a] rounded-md hover:bg-[#3a3a3a] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleSignOut();
              setShowLogoutModal(false);
            }}
            className="w-full px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );

  // Load content sections

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-400">Loading...</div>
        </div>
      </div>
    );
  }

  // Common button class to extract
  const buttonClass =
    "w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-600/10 hover:shadow-orange-600/20 mt-6";

  return (
    <PageTransition>
      <>
        <style>{styles}</style>
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[800px] h-[800px] bg-orange-600/30 rounded-full blur-[120px] -top-40 -right-20 animate-pulse" />
            <div className="absolute w-[600px] h-[600px] bg-orange-900/30 rounded-full blur-[120px] -bottom-20 -left-40" />
            <div className="absolute inset-0 backdrop-blur-[60px]" />
          </div>

          {showLogoutModal && <LogoutConfirmationModal />}

          {/* Make nav glass-like */}
          <nav className="bg-[#1a1a1a]/30 backdrop-blur-xl p-4 border-b border-white/[0.05] relative z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div
                style={{
                  display: "flex",
                  gap: "0.25rem",
                  alignItems: "center",
                }}
              >
                <Globe color="orangered" />
                <h1
                  style={{ marginLeft: "0.5rem" }}
                  className="text-xl font-bold"
                >
                  Site Configuration
                </h1>
              </div>

              <div className="relative user-menu">
                <Tooltip content={user?.email || "User Account"}>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="aspect-square w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-medium hover:bg-orange-700 transition-colors"
                  >
                    {user?.email?.[0].toUpperCase() || (
                      <UserIcon className="w-5 h-5" />
                    )}
                  </button>
                </Tooltip>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div
                    className="absolute right-0 mt-2 w-64 py-2 bg-[#1a1a1a]/95 rounded-md shadow-xl z-50 border border-white/[0.05]"
                    style={{
                      animation: "fadeScale 0.2s ease-out forwards",
                      transformOrigin: "top right",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                    }}
                  >
                    <div className="px-4 py-3 text-sm border-b border-white/[0.05]">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 aspect-square w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-medium">
                          {user?.email?.[0].toUpperCase() || (
                            <UserIcon className="w-5 h-5" />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="truncate font-medium">
                            {user?.email}
                          </span>
                          <span className="text-gray-400 text-xs">
                            Administrator
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        setShowLogoutModal(true);
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width) * 100;
                        const y = ((e.clientY - rect.top) / rect.height) * 100;
                        e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
                        e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
                      }}
                      className="w-full px-4 py-2 text-sm text-left text-red-400 hover-gradient flex items-center gap-2 transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto p-6 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
              viewport={{ once: true }}
            >
              {/* Cards Grid */}
              <motion.div
                variants={itemVariants}
                className="transition-all duration-300 ease-out"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Users Card */}
                  <div className="glass-card p-6 rounded-2xl transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-orange-600/10 backdrop-blur-md rounded-xl">
                        <Users className="w-6 h-6 text-orange-500" />
                      </div>
                      <h2 className="text-xl font-bold">Users</h2>
                    </div>
                    <p className="text-gray-400 flex-grow">
                      Manage your users and permissions
                    </p>
                    <Tooltip content="Manage user accounts and permissions">
                      <GradientButton className={buttonClass}>
                        <UserIcon className="w-4 h-4" />
                        View Users
                      </GradientButton>
                    </Tooltip>
                  </div>

                  {/* Content Card */}
                  <div className="glass-card p-6 rounded-2xl transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-orange-600/10 backdrop-blur-md rounded-xl">
                        <LayoutDashboard className="w-6 h-6 text-orange-500" />
                      </div>
                      <h2 className="text-xl font-bold">Content</h2>
                    </div>
                    <p className="text-gray-400 flex-grow">
                      Manage your landing page content and sections
                    </p>
                    <Tooltip content="Edit your landing page content">
                      <GradientButton
                        className={buttonClass}
                        onClick={(event: React.MouseEvent) => {
                          event.stopPropagation();
                          navigate("/edit", {
                            state: { from: location.pathname },
                          });
                        }}
                      >
                        <Plus className="w-4 h-4" />
                        Edit Content
                      </GradientButton>
                    </Tooltip>
                  </div>

                  {/* Settings Card */}
                  <div className="glass-card p-6 rounded-2xl transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-orange-600/10 backdrop-blur-md rounded-xl">
                        <Settings className="w-6 h-6 text-orange-500" />
                      </div>
                      <h2 className="text-xl font-bold">Settings</h2>
                    </div>
                    <p className="text-gray-400 flex-grow">
                      Configure your application settings
                    </p>
                    <Tooltip content="Configure application settings">
                      <GradientButton className={buttonClass}>
                        <Settings className="w-4 h-4" />
                        View Settings
                      </GradientButton>
                    </Tooltip>
                  </div>
                </div>
              </motion.div>

              {/* Recent Activity Section */}
              <motion.div variants={itemVariants} className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
                <div className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px]">
                      <thead className="bg-[#1a1a1a]">
                        <tr>
                          <th className="px-6 py-3 text-left">Action</th>
                          <th className="px-6 py-3 text-left">User</th>
                          <th className="px-6 py-3 text-left">Date</th>
                          <th className="px-6 py-3 text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap">
                            Content Updated
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            admin@example.com
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            2024-03-20
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <GradientBadge>Completed</GradientBadge>
                          </td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </>
    </PageTransition>
  );
};

export default AdminIndex;
