import { useEffect, useState } from "react"
import { Products } from "./Products"

export const Main = () => {

  const [products, setProducts] = useState<any[]>([]);
    function handleAddProducts (product : any){
      const newProductList = [...products, product]
      setProducts(newProductList)
      handleSaveData(newProductList)
    }
    function handleDeleteProduct(index : number) {
      let newProductList = products.filter((_val, valIndex) => {
        return valIndex !== index
      })
      setProducts(newProductList)
      handleSaveData(newProductList)
    }
    function handleSaveData(products :any) {
      localStorage.setItem('products', JSON.stringify({ products: products }))
    }
    function handleEditProduct(index: number, updatedProduct: any) {
      console.log('index: ', index);
      console.log('updatedProduct: ', updatedProduct);
      
      let newProductList = [...products];
      newProductList[index] = updatedProduct; 
      setProducts(newProductList);
      handleSaveData(newProductList);
    }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem('products')) { return }
    let db = JSON.parse(localStorage.getItem('products') || '{}');
    setProducts(db.products)
  }, [])
  return (
    <div className="h-screen bg-[#F5F9FC]">
      <Products products={products} handleAddProducts={handleAddProducts} handleDeleteProduct={handleDeleteProduct} handleEditProduct={handleEditProduct}/>
    </div>
  )
}
