import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

export const AddOrEditProducts = (props: any) => {
  const {
    setModalOpen,
    handleAddProducts,
    isEdit,
    setIsEdit,
    handleEditProduct,
    selectedProduct,
    selectedProductIndex,
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const [selectedFileName, setSelectedFileName] = useState<string>("");

  useEffect(() => {
    if (isEdit && selectedProduct) {
      setValue("name", selectedProduct.name);
      setValue("status", selectedProduct.status);
      setValue("price", selectedProduct.price);
      setValue("totalSales", selectedProduct.totalSales);
      if (selectedProduct.image) {
        setSelectedFileName(selectedProduct.image.name || "Selected file");
        setValue("image", selectedProduct.image);
      }
    }
  }, [isEdit, selectedProduct, setValue]);

  function onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      setValue("image", file);
    }
  }

  const onSubmit = (data: any) => {
    const productDetails = {
      ...data,
      image: data.image || selectedProduct?.image || null,
    };

    if (isEdit && selectedProduct) {
      handleEditProduct(selectedProductIndex, productDetails);
    } else {
      handleAddProducts(productDetails);
    }

    setModalOpen(false);
    setIsEdit(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-2xl relative">
        <button
          onClick={() => {
            setModalOpen(false);
            setIsEdit(false);
          }}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <IoMdClose size={24} />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          {(isEdit ? "Edit" : "Add") + " Product"}
        </h2>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Product Image Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Image</label>
            <div className="relative">
              <input
                {...register("image", { required: !isEdit ? "Image is required" : false })}
                type="file"
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
                onChange={onFileSelected}
                hidden
              />
              <input
                type="text"
                value={selectedFileName}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            {errors.image && <p className="text-red-500 text-sm">{String(errors.image.message)}</p>}
          </div>

          {/* Product Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter product name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}
          </div>

          {/* Product Status Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              {...register("status", { required: "Please select the status" })}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            >
              <option value="">Select status</option>
              <option value="available">Available</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
            {errors.status && <p className="text-red-500 text-sm">{String(errors.status.message)}</p>}
          </div>

          {/* Price Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Price ($)</label>
            <input
              {...register("price", { required: "Price is required", min: 0 })}
              type="number"
              placeholder="Enter price"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.price && <p className="text-red-500 text-sm">{String(errors.price.message)}</p>}
          </div>

          {/* Total Sales Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Total Sales</label>
            <input
              {...register("totalSales", { required: "Total sales is required", min: 0 })}
              type="number"
              placeholder="Enter total sales"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.totalSales && <p className="text-red-500 text-sm">{String(errors.totalSales.message)}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full px-4 py-2 rounded-md transition ${
              isValid ? "bg-black text-white hover:bg-gray-800" : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
