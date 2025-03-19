import PageTransition from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { db } from "@/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  ChevronLeft,
  Globe,
  Image,
  LayoutDashboard,
  Pencil,
  Save,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Landing from "./sections/landing";

interface LandingContent {
  title: string;
  description: string;
  backgroundImage: string;
  tagline: string;
}

const LandingEdit = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState<LandingContent>({
    title: "Leading Distributor of Industrial Gases in Oman",
    description: "Your description here...",
    backgroundImage: "https://giffiles.alphacoders.com/222/222700.gif",
    tagline: "Manufacturing | Supply | Hydro-Testing",
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const docRef = doc(db, "site-content", "landing");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContent(docSnap.data() as LandingContent);
        }
      } catch (err) {
        console.error("Error fetching content:", err);
      }
    };
    fetchContent();
  }, []);

  const handleSave = async () => {
    try {
      setSaving(true);
      const docRef = doc(db, "site-content", "landing");
      await setDoc(docRef, content, { merge: true });
      setIsEditing(false);
    } catch (err) {
      console.error("Error saving content:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleEditClick = () => {
    console.log("Edit button clicked"); // Debug log
    setIsEditing(true);
  };

  console.log("Current isEditing state:", isEditing); // Debug log

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] bg-orange-600/30 rounded-full blur-[120px] -top-40 -right-20 animate-pulse" />
          <div className="absolute w-[600px] h-[600px] bg-orange-900/30 rounded-full blur-[120px] -bottom-20 -left-40" />
          <div className="absolute inset-0 backdrop-blur-[60px]" />
        </div>

        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 bg-[#1a1a1a]/80 backdrop-blur-xl border-b border-white/[0.05] z-50">
          <div className="max-w-[2000px] mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate("/admin-index")}
                className="bg-[rgba(100,100,100,0.2)] hover:bg-[rgba(100,100,100,0.3)] transition-all duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Globe className="text-orangered" />
                <h1 className="text-xl font-bold">Editor</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="pt-16 relative z-10">
          {isEditing ? (
            <div className="flex min-h-[calc(100vh-64px)]">
              {/* Editor Sidebar */}
              <div className="fixed left-0 h-[calc(100vh-64px)] w-96 bg-[#1a1a1a]/80 backdrop-blur-xl border-r border-white/[0.05]">
                <div className="p-6 space-y-6 h-full overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() => setIsEditing(false)}
                        className="bg-[rgba(100,100,100,0.2)] hover:bg-[rgba(100,100,100,0.3)] p-2"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <h2 className="text-lg font-semibold text-orange-500">
                        Content Editor
                      </h2>
                    </div>

                    {/* Editor form fields */}
                    <div className="space-y-4 mt-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          value={content.title}
                          onChange={(e) =>
                            setContent({ ...content, title: e.target.value })
                          }
                          className="w-full bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Tagline
                        </label>
                        <input
                          type="text"
                          value={content.tagline}
                          onChange={(e) =>
                            setContent({ ...content, tagline: e.target.value })
                          }
                          className="w-full bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                        />
                      </div>

                      {/* Save button at the bottom of the editor */}
                      <div className="pt-6">
                        <Button
                          onClick={handleSave}
                          className="w-full bg-orange-600 hover:bg-orange-700 h-10"
                          disabled={saving}
                        >
                          {saving ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <Save className="h-5 w-5" />
                              <span>Save Changes</span>
                            </div>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview Area */}
              <div className="ml-96 w-full">
                <div className="p-6">
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <Landing editMode={true} {...content} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {/* Landing Content Card */}
                <div
                  className="glass-card p-6 rounded-2xl transition-all duration-300 flex flex-col"
                  onClick={handleEditClick} // Add click handler to the entire card
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-600/10 backdrop-blur-md rounded-xl">
                      <LayoutDashboard className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-xl font-bold">Landing Content</h2>
                  </div>
                  <p className="text-gray-400 flex-grow">
                    Edit your main landing page content
                  </p>
                  <Button
                    style={{ zIndex: "10" }}
                    onClick={handleEditClick}
                    className="mt-4 w-full bg-[rgba(100,100,100,0.2)] hover:bg-[rgba(100,100,100,0.3)] transition-all duration-200"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit Content
                  </Button>
                </div>

                {/* Product Catalogue Card */}
                <div className="glass-card p-6 rounded-2xl transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-600/10 backdrop-blur-md rounded-xl">
                      <Image className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-xl font-bold">Product Catalogue</h2>
                  </div>
                  <p className="text-gray-400 flex-grow">
                    Manage your product catalogue
                  </p>
                  <Button
                    style={{ zIndex: "10" }}
                    onClick={() => navigate("/product-edit")}
                    className="mt-4 w-full bg-[rgba(100,100,100,0.2)] hover:bg-[rgba(100,100,100,0.3)] transition-all duration-200"
                  >
                    <Image className="w-4 h-4 mr-2" />
                    Manage Products
                  </Button>
                </div>

                {/* Client List Card */}
                {/* <div className="glass-card p-6 rounded-2xl transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-600/10 backdrop-blur-md rounded-xl">
                      <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-xl font-bold">Client List</h2>
                  </div>
                  <p className="text-gray-400 flex-grow">
                    Update your client information and testimonials
                  </p>
                  <Tooltip content="Manage client information">
                    <Button
                      onClick={() => navigate("/client-list")}
                      className="mt-4 w-full bg-[rgba(100,100,100,0.2)] hover:bg-[rgba(100,100,100,0.3)] transition-all duration-200"
                    >
                      Manage Clients
                    </Button>
                  </Tooltip>
                </div> */}

                {/* Contact Information Card */}
                {/* <div className="glass-card p-6 rounded-2xl transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-600/10 backdrop-blur-md rounded-xl">
                      <Contact className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-xl font-bold">Contact Info</h2>
                  </div>
                  <p className="text-gray-400 flex-grow">
                    Update your contact details and location
                  </p>
                  <Tooltip content="Edit contact information">
                    <Button
                      onClick={() => navigate("/contact-information")}
                      className="mt-4 w-full bg-[rgba(100,100,100,0.2)] hover:bg-[rgba(100,100,100,0.3)] transition-all duration-200"
                    >
                      Manage Contact Info
                    </Button>
                  </Tooltip>
                </div> */}
              </div>
            </div>
          )}
        </main>
      </div>

      <style>{`
        .glass-card {
          background: rgba(26, 26, 26, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          position: relative;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          cursor: pointer;
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
      `}</style>
    </PageTransition>
  );
};

export default LandingEdit;
