import PageTransition from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { db } from "@/firebase/config";
import {
  ChevronLeft,
  Globe,
  Plus,
  Save,
  Trash2,
  ImagePlus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

interface Product {
  id: string;
  name: string;
  src: string;
}

const ProductEdit = () => {
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [saving, setSaving] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: "", src: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "product-list"));
      const productsData = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Product)
      );
      setProducts(productsData);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      await addDoc(collection(db, "product-list"), newProduct);
      await fetchProducts();
      setNewProduct({ name: "", src: "" });
      setIsAdding(false);
    } catch (err) {
      console.error("Error saving product:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (productId: string) => {
    try {
      await deleteDoc(doc(db, "product-list", productId));
      await fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

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
                <h1 className="text-xl font-bold">Product Editor</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="pt-16 relative z-10">
          <div className="flex min-h-[calc(100vh-64px)]">
            {/* Product List Sidebar */}
            <div className="fixed left-0 h-[calc(100vh-64px)] w-96 bg-[#1a1a1a]/80 backdrop-blur-xl border-r border-white/[0.05]">
              <div className="p-6 space-y-6 h-full overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-orange-500">
                    Products
                  </h2>
                  <Button
                    onClick={() => setIsAdding(true)}
                    className="bg-orange-600 hover:bg-orange-700 p-2"
                    disabled={isAdding}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>

                {/* Add Product Form - Moved to top */}
                {isAdding && (
                  <div className="space-y-4 border-b border-white/10 pb-4">
                    <h3 className="font-medium">Add New Product</h3>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Product Name
                      </label>
                      <input
                        type="text"
                        value={newProduct.name}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, name: e.target.value })
                        }
                        className="w-full bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Image URL
                      </label>
                      <input
                        type="text"
                        value={newProduct.src}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, src: e.target.value })
                        }
                        className="w-full bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={() => setIsAdding(false)}
                        className="flex-1 bg-gray-600 hover:bg-gray-700"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleSave}
                        className="flex-1 bg-orange-600 hover:bg-orange-700"
                        disabled={saving}
                      >
                        {saving ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <Save className="h-5 w-5" />
                            <span>Save</span>
                          </div>
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Product List */}
                <div className="space-y-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative bg-[#2a2a2a] rounded-lg p-4 hover:bg-[#3a3a3a] transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg overflow-hidden">
                          <img
                            src={product.src}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{product.name}</h3>
                        </div>
                        <Button
                          onClick={() => handleDelete(product.id)}
                          className="opacity-0 group-hover:opacity-100 bg-red-500/20 hover:bg-red-500/30 text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview Area */}
            <div className="ml-96 w-full p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="glass-card p-4 rounded-xl flex flex-col items-center"
                  >
                    <div className="w-full aspect-square bg-[#1a1a1a] rounded-lg overflow-hidden mb-4">
                      <img
                        src={product.src}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-center">{product.name}</h3>
                  </div>
                ))}
                <button
                  onClick={() => setIsAdding(true)}
                  className="glass-card p-4 rounded-xl flex flex-col items-center justify-center aspect-square hover:bg-[#2a2a2a]/50 transition-all"
                >
                  <ImagePlus className="h-8 w-8 mb-2 text-orange-500" />
                  <span>Add Product</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default ProductEdit;
