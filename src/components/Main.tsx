import { useState } from "react"
import { Products } from "./Products"

export const Main = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            status: "Active",
            totalSales : 43,
            price: 19.99,
            image: "/products/image.png"
            }
      ])
    
  return (
    <div className="h-screen bg-[#F5F9FC]">
      <Products products={products}/>
    </div>
  )
}
