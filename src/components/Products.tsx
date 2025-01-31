import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { AddOrEditProducts } from "./AddOrEditProducts";
export const Products = (props: any) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
  const { products, handleAddProducts, handleDeleteProduct, handleEditProduct } = props;

  const handleEditClick = (product: any, index: number) => {
    setIsEdit(true);
    setSelectedProduct(product);
    setSelectedProductIndex(index);
    setModalOpen(true);
  };



  return (
    <>
      <div className="flex justify-center min-h-screen p-6 bg-gray-100">
        <div className="max-w-6xl w-full p-6 m-10 bg-white shadow-lg rounded-lg h-max">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Products</h2>
          <div className="flex justify-between">
            <p className="text-lg text-gray-500 mb-6">Manage your products and view their sales performance.</p>
            <button
              onClick={() => {
                setModalOpen(true);
              }}
              className="bg-black text-white p-3 w-10 h-10 rounded-lg flex items-center justify-center"
            >
              <FaPlus className="text-white text-xl" />
            </button>
          </div>
          {products.length > 0 ? (
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg">
                  <thead>
                    <tr className="border-b bg-gray-100">
                      <th className="p-4 text-left text-sm font-medium text-gray-600">Name</th>
                      <th className="p-4 text-left text-sm font-medium text-gray-600">Status</th>
                      <th className="p-4 text-left text-sm font-medium text-gray-600">Price</th>
                      <th className="p-4 text-left text-sm font-medium text-gray-600">Total Sales</th>
                      <th className="p-4 text-left text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product: any, index: number) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 flex items-center gap-6">
                          {/* Display product image */}
                          <img
                            src={product.image ? product.image : "/products/image.png"} // fallback image if not available
                            alt={product.name}
                            className="w-20 h-20 rounded-lg object-contain"
                          />
                          <span className="text-sm text-gray-700">{product.name}</span>
                        </td>
                        <td className="p-4">
                          <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-semibold">{product.status}</span>
                        </td>
                        <td className="p-4 text-lg font-semibold text-gray-900">{product.price}</td>
                        <td className="p-4 text-lg font-semibold text-gray-900">{product.totalSales}</td>
                        <td className="p-4">
                          <button
                            className="text-yellow-500 hover:text-yellow-700 p-2 rounded-full"
                            onClick={() => handleEditClick(product, index)}
                          >
                            <MdModeEdit className="text-xl" />
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700 p-2 rounded-full"
                            onClick={() => {
                              handleDeleteProduct(index);
                            }}
                          >
                            <MdDelete className="text-xl" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">No products available.</p>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <AddOrEditProducts
          setModalOpen={setModalOpen}
          handleAddProducts={handleAddProducts}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          handleEditProduct={handleEditProduct}
          selectedProduct={selectedProduct}
          selectedProductIndex={selectedProductIndex}
        />
      )}
    </>
  );
};

