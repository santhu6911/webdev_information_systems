import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";


const AdminDashboard = () => {
    const [products, setproducts] = useState("");
    useEffect(() => {
        const fet = async() => {
            try {
                const response = await axios.get(
                  "http://localhost:3000/api/products/get-products"
                );
               
                
            }
            catch (err)
            {
                console.log(err);
            }
            
        }
        fet();
    }, [])
    
    return (
      <div>
            <div className="h-20 w-full bg-gray-200 px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold">ShopSavvy</h1>
            <div className="flex w-60 justify-around items-center font-bold ">
                <NavLink to="/admin/orders" className="text-black hover:underline">
                Orders
                </NavLink>
                <NavLink to="/admin/create-product" className="text-black hover:underline">
                Create Product
                </NavLink>

            
            </div>
            </div>
      </div>
    );
};

export default AdminDashboard;
