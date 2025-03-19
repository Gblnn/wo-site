import { useState, useEffect } from "react";
import { db, auth } from "@/firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

interface ClientManagementDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddClient: (client: {
    name: string;
    logo: string;
    description: string;
  }) => void;
}

interface Client {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const ClientManagementDialog = ({
  isOpen,
  onClose,
  onAddClient,
}: ClientManagementDialogProps) => {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [description, setDescription] = useState("");
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  const logActivity = async (action: string) => {
    try {
      await addDoc(collection(db, "activities"), {
        action,
        user: auth.currentUser?.email || "Unknown User",
        timestamp: new Date(),
        status: "Completed",
      });
    } catch (err) {
      console.error("Error logging activity:", err);
    }
  };

  const handleAdd = async () => {
    if (name && logo) {
      try {
        const newClient = { name, logo, description };
        await addDoc(collection(db, "client-list"), newClient);
        await logActivity(`Added new client: ${name}`);
        onAddClient(newClient);
        setName("");
        setLogo("");
        setDescription("");
        onClose();
      } catch (err) {
        console.error("Error adding client:", err);
      }
    }
  };

  const handleRemove = async (id: string, clientName: string) => {
    try {
      await deleteDoc(doc(db, "client-list", id));
      await logActivity(`Removed client: ${clientName}`);
      setClients(clients.filter((client) => client.id !== id));
    } catch (err) {
      console.error("Error removing client:", err);
    }
  };

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const clientCollection = collection(db, "client-list");
        const clientSnapshot = await getDocs(clientCollection);
        const clientList = clientSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Client[];
        setClients(clientList);
      } catch (err) {
        console.error("Error fetching clients:", err);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchClients();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-gray-800 rounded-lg p-6 relative z-10 w-96">
        <h2 className="text-lg font-bold text-orangered">Manage Clients</h2>
        <div className="mt-4">
          <label className="block text-sm text-white">Client Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md p-2 w-full bg-gray-700 text-white"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-white">Logo URL</label>
          <input
            type="text"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            className="border rounded-md p-2 w-full bg-gray-700 text-white"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-white">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md p-2 w-full bg-gray-700 text-white h-24"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white">Existing Clients</h3>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {clients.map((client) => (
                <li
                  key={client.id}
                  className="flex justify-between items-center text-white bg-gray-700 p-2 rounded"
                >
                  <span>{client.name}</span>
                  <button
                    onClick={() => handleRemove(client.id, client.name)}
                    className="bg-red-600 text-white rounded-md px-2 py-1 text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white rounded-md px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="bg-orangered text-white rounded-md px-4 py-2"
          >
            Add Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientManagementDialog;
