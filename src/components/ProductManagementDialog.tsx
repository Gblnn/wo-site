import { useEffect, useState } from "react";
import { db } from "@/firebase/config"; // Adjust the import based on your Firebase config
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

interface ProductManagementDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: { name: string; src: string }) => void;
}

const ProductManagementDialog = ({
  isOpen,
  onClose,
  onAddProduct,
}: ProductManagementDialogProps) => {
  const [name, setName] = useState("");
  const [src, setSrc] = useState("");
  const [products, setProducts] = useState<
    { id: string; name: string; src: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const handleAdd = async () => {
    if (name && src) {
      const newProduct = { name, src };
      await addDoc(collection(db, "product-list"), newProduct);
      onAddProduct(newProduct);
      setName("");
      setSrc("");
      onClose();
    }
  };

  const handleRemove = async (id: string) => {
    await deleteDoc(doc(db, "product-list", id));
    setProducts(products.filter((product) => product.id !== id));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const productCollection = collection(db, "product-list");
      const productSnapshot = await getDocs(productCollection);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as { id: string; name: string; src: string }[];
      setProducts(productList);
      setLoading(false);
    };

    if (isOpen) {
      fetchProducts();
    }
  }, [isOpen]);

  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-gray-800 rounded-lg p-6 relative z-10 w-96 transition-transform transform duration-300 ease-in-out">
        <h2 className="text-lg font-bold text-orangered">Manage Products</h2>
        <div className="mt-4">
          <label className="block text-sm text-white">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md p-2 w-full bg-gray-700 text-white"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-white">Image URL</label>
          <input
            type="text"
            value={src}
            onChange={(e) => setSrc(e.target.value)}
            className="border rounded-md p-2 w-full bg-gray-700 text-white"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white">
            Existing Products
          </h3>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <ul className="mt-2">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center text-white"
                >
                  <span>{product.name}</span>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="bg-red-600 text-white rounded-md px-2 py-1 ml-2"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white rounded-md px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="bg-orangered text-white rounded-md px-4 py-2"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementDialog;
