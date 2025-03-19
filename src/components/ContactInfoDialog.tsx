import { useState, useEffect } from "react";
import { db } from "@/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { X, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface ContactInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactInfo {
  phones: string[];
  landlines: string[];
  emails: string[];
  address: string;
}

const ContactInfoDialog = ({ isOpen, onClose }: ContactInfoDialogProps) => {
  const [content, setContent] = useState<ContactInfo>({
    phones: ["98897837", "98456245"],
    landlines: ["26701512", "26701633"],
    emails: ["sales@wahatoman.com", "wahatoman@gmail.com"],
    address:
      "P.O. Box: 162, PC: 325, Phase No : 5, Suhar Industrial City, Way No : 508 Sultanate of Oman",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);
        const docRef = doc(db, "site-content", "contact");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContent(docSnap.data() as ContactInfo);
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

  const handleSave = async () => {
    try {
      setSaving(true);
      setError(null);
      const docRef = doc(db, "site-content", "contact");
      await setDoc(docRef, content, { merge: true });
      onClose();
    } catch (err) {
      setError("Failed to save changes. Please try again.");
      console.error("Error saving content:", err);
    } finally {
      setSaving(false);
    }
  };

  const addField = (field: keyof ContactInfo) => {
    if (Array.isArray(content[field])) {
      setContent({
        ...content,
        [field]: [...(content[field] as string[]), ""],
      });
    }
  };

  const removeField = (field: keyof ContactInfo, index: number) => {
    if (Array.isArray(content[field])) {
      const newArray = [...(content[field] as string[])];
      newArray.splice(index, 1);
      setContent({ ...content, [field]: newArray });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-[#1a1a1a]/90 backdrop-blur-xl rounded-lg w-[32rem] max-h-[80vh] flex flex-col border border-white/[0.05] shadow-xl">
        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-orange-500">
                Contact Information
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/10"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-500">
                {error}
              </div>
            )}

            <div className="space-y-6">
              {/* Mobile Numbers */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Mobile Numbers
                </label>
                <div className="space-y-2">
                  {content.phones.map((phone, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => {
                          const newPhones = [...content.phones];
                          newPhones[index] = e.target.value;
                          setContent({ ...content, phones: newPhones });
                        }}
                        className="flex-1 bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-white/10 hover:text-red-500"
                        onClick={() => removeField("phones", index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="ghost"
                    className="w-full hover:bg-white/10 border border-dashed border-white/20"
                    onClick={() => addField("phones")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Mobile Number
                  </Button>
                </div>
              </div>

              {/* Landlines */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Landlines
                </label>
                <div className="space-y-2">
                  {content.landlines.map((landline, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={landline}
                        onChange={(e) => {
                          const newLandlines = [...content.landlines];
                          newLandlines[index] = e.target.value;
                          setContent({ ...content, landlines: newLandlines });
                        }}
                        className="flex-1 bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-white/10 hover:text-red-500"
                        onClick={() => removeField("landlines", index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="ghost"
                    className="w-full hover:bg-white/10 border border-dashed border-white/20"
                    onClick={() => addField("landlines")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Landline
                  </Button>
                </div>
              </div>

              {/* Email Addresses */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Addresses
                </label>
                <div className="space-y-2">
                  {content.emails.map((email, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          const newEmails = [...content.emails];
                          newEmails[index] = e.target.value;
                          setContent({ ...content, emails: newEmails });
                        }}
                        className="flex-1 bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-white/10 hover:text-red-500"
                        onClick={() => removeField("emails", index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="ghost"
                    className="w-full hover:bg-white/10 border border-dashed border-white/20"
                    onClick={() => addField("emails")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Email Address
                  </Button>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Address
                </label>
                <textarea
                  value={content.address}
                  onChange={(e) =>
                    setContent({ ...content, address: e.target.value })
                  }
                  className="w-full bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 h-24 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fixed footer */}
        <div className="border-t border-white/[0.05] bg-[#1a1a1a]/90 backdrop-blur-xl p-4 flex justify-end gap-2 rounded-b-lg">
          <Button
            variant="ghost"
            className="hover:bg-white/10"
            onClick={onClose}
            disabled={saving}
          >
            Cancel
          </Button>
          <Button
            className="bg-orange-600 hover:bg-orange-700"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoDialog;
