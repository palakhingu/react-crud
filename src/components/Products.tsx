import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
export const Products = (props: any) => {
  const { products } = props;
  return (
   <div className="flex justify-center min-h-screen p-6 bg-gray-100">
  <div className="max-w-6xl w-full p-6 m-10 bg-white shadow-lg rounded-lg">
    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Products</h2>
    <p className="text-lg text-gray-500 mb-6">Manage your products and view their sales performance.</p>
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
              <td className="p-4 flex items-center gap-4">
                <img src={product.image} alt={product.name} className="w-14 h-14 rounded-full object-cover" />
                <span className="text-sm text-gray-700">{product.name}</span>
              </td>
              <td className="p-4">
                <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-semibold">Active</span>
              </td>
              <td className="p-4 text-lg font-semibold text-gray-900">{product.price}</td>
              <td className="p-4 text-lg font-semibold text-gray-900">{product.totalSales}</td>
              <td className="p-4 flex gap-4 justify-center items-center">
                <button className="text-blue-500 hover:text-blue-700 p-2 rounded-full">
                  <FaEye className="text-xl" />
                </button>
                <button className="text-yellow-500 hover:text-yellow-700 p-2 rounded-full">
                  <MdModeEdit className="text-xl" />
                </button>
                <button className="text-red-500 hover:text-red-700 p-2 rounded-full">
                  <MdDelete className="text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex justify-between items-center mt-6 text-gray-600">
      <p className="text-sm">Showing 1-5 of 10 products</p>
      <div className="flex gap-2">
        <button className="px-4 py-2 border rounded-lg disabled:opacity-50 text-sm" disabled>
          &lt; Prev
        </button>
        <button className="px-4 py-2 border rounded-lg text-sm bg-blue-500 text-white hover:bg-blue-600">
          Next &gt;
        </button>
      </div>
    </div>
  </div>
</div>

  );
};
