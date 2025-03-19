import { db } from "@/firebase/config";
import { auth } from "@/firebase/config";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

interface LandingContentDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LandingContent {
  title: string;
  description: string;
  backgroundImage: string;
  tagline: string;
}

const LandingContentDialog = ({
  isOpen,
  onClose,
}: LandingContentDialogProps) => {
  const [content, setContent] = useState<LandingContent>({
    title: "Leading Distributor of Industrial Gases in Oman",
    description: "Your description here...",
    backgroundImage: "https://giffiles.alphacoders.com/222/222700.gif",
    tagline: "Manufacturing | Supply | Hydro-Testing",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);
        const docRef = doc(db, "site-content", "landing");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContent(docSnap.data() as LandingContent);
        }
      } catch (err) {
        setError("Failed to load content. Please try again.");
        console.error("Error fetching content:", err);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchContent();
    }
  }, [isOpen]);

  const logActivity = async (action: string, user: string) => {
    try {
      await addDoc(collection(db, "activities"), {
        action,
        user,
        timestamp: new Date(),
        status: "Completed",
      });
    } catch (err) {
      console.error("Error logging activity:", err);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError(null);
      const docRef = doc(db, "site-content", "landing");
      await setDoc(docRef, content, { merge: true });
      await logActivity(
        "Updated Landing Content",
        auth.currentUser?.email || "Unknown User"
      );
      onClose();
    } catch (err) {
      setError("Failed to save changes. Please try again.");
      console.error("Error saving content:", err);
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-gray-800 rounded-lg p-6 relative z-10 w-[32rem] transition-transform transform duration-300 ease-in-out">
        <h2 className="text-lg font-bold text-orangered">
          Edit Landing Page Content
        </h2>

        {error && (
          <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-md text-red-500">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center h-32">
            <div className="w-8 h-8 border-4 border-orangered border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm text-white mb-2">Title</label>
              <input
                type="text"
                value={content.title}
                onChange={(e) =>
                  setContent({ ...content, title: e.target.value })
                }
                className="border rounded-md p-2 w-full bg-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-2">
                Background Image URL
              </label>
              <input
                type="text"
                value={content.backgroundImage}
                onChange={(e) =>
                  setContent({ ...content, backgroundImage: e.target.value })
                }
                className="border rounded-md p-2 w-full bg-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-2">Tagline</label>
              <input
                type="text"
                value={content.tagline}
                onChange={(e) =>
                  setContent({ ...content, tagline: e.target.value })
                }
                className="border rounded-md p-2 w-full bg-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-2">
                Description
              </label>
              <textarea
                value={content.description}
                onChange={(e) =>
                  setContent({ ...content, description: e.target.value })
                }
                className="border rounded-md p-2 w-full bg-gray-700 text-white h-24"
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={onClose}
                className="bg-gray-600 text-white rounded-md px-4 py-2"
                disabled={saving}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-orangered text-white rounded-md px-4 py-2 relative"
              >
                {saving ? (
                  <>
                    <span className="opacity-0">Save Changes</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingContentDialog;
