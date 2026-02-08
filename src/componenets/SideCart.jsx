import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SideCartProducts from "./SideCartProducts";
import Img4 from "../assets/Img4.jpg";
import Img2 from "../assets/Img2.jpg";
import toast from "react-hot-toast";
import CartSummary from "./CartSummary";

export default function SideCart() {
  const [active, setActive] = useState("dine");

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

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const tax = subtotal * 0.05;

  const incrementQty = (index) => {
    let copy = [...items];
    copy[index].qty += 1;
    setItems(copy);
    toast.success("Quantity updated Successfully");
  };

  const decrementQty = (index) => {
    let copy = [...items];

    if (copy[index].qty > 1) {
      copy[index].qty -= 1;
      toast.success("Quantity updated Successfully");
    } else {
      copy.splice(index, 1);
      toast.success("Item Removed Successfully");
    }

    setItems(copy);
  };

  return (
    <div className="flex justify-center border-l border-l-border h-full">
      <div className=" flex flex-col items-center">
        <div className="flex flex-col gap-4.5 p-8 w-full border-b border-b-[#F1F5F9]">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-[24px] text-textDark font-bold font-lexend">
              Current Order
            </h1>
            <FaRegTrashAlt className="text-[20px] text-[#FF2056] cursor-pointer" />
          </div>
          <div className="flex justify-between items-center bg-[#F8FAFC] p-1 rounded-2xl">
            <button
              onClick={() => setActive("dine")}
              className={
                active === "dine"
                  ? "text-mainGreen py-3 w-42.5 bg-white rounded-xl border border-[#f1f5f9]"
                  : "text-[#90A1B9] py-3 w-42.5"
              }
            >
              <p className="text-[14px] text-center">Dine In</p>
            </button>

            <button
              onClick={() => setActive("away")}
              className={
                active === "away"
                  ? "text-mainGreen py-3 w-42.5 bg-white rounded-xl border border-[#f1f5f9]"
                  : "text-[#90A1B9] py-3 w-42.5"
              }
            >
              <p className="text-[14px] text-center">Take Away</p>
            </button>
          </div>
        </div>
        <div className=" w-full grow">
          <SideCartProducts
            items={items}
            incrementQty={incrementQty}
            decrementQty={decrementQty}
          />
        </div>
        <CartSummary subtotal={subtotal} tax={tax} />
      </div>
    </div>
  );
}
