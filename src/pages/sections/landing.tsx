import { siteContent } from "@/config/content";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  editMode?: boolean;
}

export default function Landing({ editMode }: Props) {
  const [content, setContent] = useState(siteContent.landing);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "site-content", "landing");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContent(docSnap.data() as typeof content);
        }
      } catch (err) {
        console.error("Error fetching landing content:", err);
        // Static content remains as fallback
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []); // Remove editMode dependency

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="w-8 h-8 border-4 border-orangered border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black relative">
      <img
        alt="background"
        src={content.backgroundImage}
        width={"500rem"}
        style={{ opacity: 0.5, position: "absolute" }}
      />
      <p
        style={{ textAlign: "center" }}
        className="absolute text-white md:text-6xl text-5xl p-10 font-medium"
      >
        {content.title}
      </p>
      <div style={{ marginTop: "28rem", padding: "0.5rem" }}>
        <p style={{ wordSpacing: "0.5rem", zIndex: 1 }}>{content.tagline}</p>
      </div>

      <ChevronDown
        className="animate-bounce"
        width={"2rem"}
        height={"2rem"}
        color="orangered"
        style={{ position: "absolute", marginTop: "22rem" }}
      />
      {editMode && (
        <p
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            paddingLeft: "1rem",
            paddingRight: "1rem",
            background: "orangered",
          }}
        >
          Landing Section
        </p>
      )}
    </div>
  );
}
