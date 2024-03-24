import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "./Loading";
import axios from "../adapters/axios";


const AdminCreate = () => {
  const [loader, setloader] = useState(false);
  const [formData, setFormData] = useState({
    shortTitle: "",
    longTitle: "",
    mrp: "",
    cost: "",
    discount: "",
    quantity: "",
    discount2: "",
    tagline: "newly", // Default value
    url: "",
    detailUrl: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async(e) => {
      e.preventDefault();
      const data = formData;
      try {
         // console.log(formData);
          const response = await axios.post("http://localhost:3000/api/products/create-product", data);
          console.log(response);
        
      } catch (err)
      {
          console.log(err);
         // window.location.href = "/admin/dashboard";
      }
  };

  return (
    <div>
      <div className="h-20 w-full bg-gray-200 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ShopSavvy</h1>
        <div className="flex w-60 justify-around items-center font-bold ">
          <NavLink to="/admin/orders" className="text-black hover:underline">
            Orders
          </NavLink>

          <NavLink
            to="/admin/create-product"
            className="text-black hover:underline"
          >
            Create Product
          </NavLink>
        </div>
      </div>
      {!loader ? (
        <div>
          <div className="max-w-sm mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  Short Title
                </label>
                <input
                  type="text"
                  name="shortTitle"
                  value={formData.shortTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  Long Title
                </label>
                <input
                  type="text"
                  name="longTitle"
                  value={formData.longTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Repeat this structure for the other fields (mrp, cost, discountCost, quantity, discount, imageUrl) */}
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  MRP
                </label>
                <input
                  type="number"
                  name="mrp"
                  value={formData.mrp}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  Cost
                </label>
                <input
                  type="number"
                  name="cost"
                  value={formData.cost}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  Discount Cost
                </label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  Discount Mention text
                </label>
                <input
                  type="text"
                  name="discount2"
                  value={formData.discount2}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  Tagline
                </label>
                <select
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="Newly Introduced">Newly Introduced</option>
                  <option value="trending">Trending</option>
                  <option value="Best_Seller">Best Seller</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.tagline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="mobile">mobile</option>
                  <option value="electronics">electronics</option>
                  <option value="appliances">appliances</option>
                  <option value="furniture">furniture</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  name="url"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                  Image URL 2
                </label>
                <input
                  type="text"
                  name="detailUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AdminCreate;
