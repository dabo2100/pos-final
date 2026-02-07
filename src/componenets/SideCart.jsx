import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SideCartProducts from "./SideCartProducts";
import Img4 from "../assets/Img4.jpg";
import Img2 from "../assets/Img2.jpg";
import toast from "react-hot-toast";
import { IoMdArrowForward } from "react-icons/io";

export default function SideCart() {
  const [items, setItems] = useState([
    {
      name: "Crispy Calamari",
      price: 12.5,
      image: Img4,
      qty: 1,
    },
    {
      name: "Truffle Margherita",
      price: 22.0,
      image: Img2,
      qty: 1,
    },
  ]);

  const incrementQty = (index) => {
    let copy = [...items];
    copy[index].qty += 1;
    setItems(copy);
    toast.success('Quantity updated Successfully')
  };

  const decrementQty = (index) => {
    let copy = [...items];

    if (copy[index].qty > 1) {
      copy[index].qty -= 1;
      toast.success('Quantity updated Successfully')
    } else {
      copy.splice(index, 1);
      toast.success('Item Removed Successfully')
    }

    setItems(copy);
  };

  return (
    <div className="flex justify-center border-l border-l-border h-full">
      <div className="container flex flex-col items-center">
        <div className="flex flex-col gap-4 p-8 w-full border-b border-b-[#F1F5F9]">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-[24px] text-textDark font-bold font-lexend">
              Current Order
            </h1>
            <FaRegTrashAlt className="text-[20px] text-[#FF2056] cursor-pointer" />
          </div>
          <div className="flex justify-between items-center bg-[#F8FAFC] p-1 rounded-2xl">
            <NavLink
              to="/dine"
              className={({ isActive }) =>
                isActive
                  ? "text-mainGreen py-3 w-42.5 bg-white rounded-xl border border-[#f1f5f9]"
                  : "text-[#90A1B9] py-3 w-42.5"
              }
            >
              <p className="text-[14px] text-center">Dine In</p>
            </NavLink>
            <NavLink
              to="/away"
              className={({ isActive }) =>
                isActive
                  ? "text-mainGreen py-3 w-42.5 bg-white rounded-xl border border-[#f1f5f9]"
                  : "text-[#90A1B9] py-3 w-42.5"
              }
            >
              <p className="text-[14px] text-center">Take Away</p>
            </NavLink>
          </div>
        </div>
        <div className=" w-full grow">
          <SideCartProducts
          items={items}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
        />
        </div>
        <div className="flex flex-col w-full bg-[#F8FAFC]/50 p-8 border-t border-t-[#F1F5F9]">
          <div className="flex flex-col gap-2 pb-2">
            <div className="flex justify-between items-center">
              <p className="text-[#90A1B9] text-[12px] font-bold tracking-[1.2px]">Subtotal</p>
              <p className="text-textDark text-[12px] font-bold tracking-[1.2px]">$ {items.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#90A1B9] text-[12px] font-bold tracking-[1.2px]">Service Tax (5%)</p>
              <p className="text-textDark text-[12px] font-bold tracking-[1.2px]">$ 2.95</p>
            </div>
          </div>
          <div className="flex flex-col pt-4 mb-6 border-t border-t-[#E2E8F0]">
            <div className="flex justify-between items-center">
              <p className="text-textDark text-[20px] font-lexend font-bold">Total Due</p>
              <p className="text-mainGreen text-[30px] font-bold">$ {(items.reduce((total, item) => total + item.price * item.qty, 0) + 2.95).toFixed(2)}</p>
            </div>
          </div>
          <button className="flex justify-center items-center gap-3 cursor-pointer py-5 rounded-2xl bg-mainGreen text-white shadow-xl shadow-mainGreen/30">
              <p className="text-white text-[14px] font-bold tracking-[1.4px]">Proceed to Checkout</p>
              <IoMdArrowForward className="text-[16px]"/>
          </button>
        </div>
      </div>
    </div>
  );
}
