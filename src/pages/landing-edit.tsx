import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/page-transition";
import Landing from "./sections/landing";
import ServicesSection from "./sections/services-section";

const LandingEdit = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <nav className="fixed top-0 left-0 right-0 bg-[#1a1a1a] p-4 z-10 border-b border-gray-800">
          <div className="max-w-7xl mx-auto flex items-center">
            <button
              onClick={() =>
                navigate("/admin-index", { state: { from: location.pathname } })
              }
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-all duration-200"
              title="Back to Dashboard"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div style={{ border: "" }} className="h-6 w-px bg-gray-800 mx-4" />
            <h1 className="text-xl font-bold">Edit Content</h1>
          </div>
        </nav>
        <div style={{}}>
          <Landing editMode />
          <ServicesSection editMode />
        </div>
      </div>
    </PageTransition>
  );
};

export default LandingEdit;
