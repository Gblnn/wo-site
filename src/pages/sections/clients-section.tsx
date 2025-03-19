import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { siteContent } from "@/config/content";

interface Client {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export default function ClientsSection() {
  const [clients, setClients] = useState<Client[]>(siteContent.clients);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "client-list"));
        const clientsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Client, "id">),
        }));
        if (clientsData.length > 0) {
          setClients(clientsData);
        }
      } catch (err) {
        console.error("Error fetching clients:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0 }}
    >
      <div className="w-full flex justify-center items-center p-6">
        <div className="max-w-[80rem] w-full">
          <h2 className="text-2xl font-semibold tracking-wide text-center mb-8">
            Our Clients
          </h2>

          {loading ? (
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-orangered border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((client) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-4 rounded-xl flex flex-col items-center"
                >
                  <div className="w-full aspect-square bg-[#1a1a1a] rounded-lg overflow-hidden mb-4">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <h3 className="font-medium text-center">{client.name}</h3>
                  {client.description && (
                    <p className="text-sm text-gray-400 text-center mt-2">
                      {client.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
