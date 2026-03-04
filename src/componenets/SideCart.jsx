import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import CartSummary from './CartSummary';
import SideCartProducts from './SideCartProducts';
import { useCart, useType } from '../store';
import Swal from 'sweetalert2';

export default function SideCart() {
  const { type, setType } = useType();
  const { cart, setCart } = useCart();
  const clearCart = () => {
    Swal.fire({
      icon: 'question',
      showCancelButton: true,
      text: 'Are you sure you want to clear cart ?',
    }).then((res) => {
      if (res.isConfirmed) {
        setCart([]);
        Swal.fire({ icon: 'success', text: 'Cart Cleared Successfully' });
      }
    });
  };
  return (
    <div className="flex justify-center border-l border-l-border h-full">
      <div className=" flex flex-col items-center">
        <div className="flex flex-col gap-4.5 p-8 w-full border-b border-b-[#F1F5F9]">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-[24px] text-textDark font-bold font-lexend">Current Order</h1>
            <FaRegTrashAlt onClick={clearCart} className="text-[20px] text-[#FF2056] cursor-pointer" />
          </div>
          <div className="flex justify-between items-center bg-[#F8FAFC] p-1 rounded-2xl">
            <button onClick={() => setType('Dine')} className={type === 'Dine' ? 'text-mainGreen py-3 w-42.5 bg-white rounded-xl border border-[#f1f5f9]' : 'text-[#90A1B9] py-3 w-42.5'}>
              <p className="text-[14px] text-center">Dine In</p>
            </button>
            <button onClick={() => setType('Delivery')} className={type === 'Delivery' ? 'text-mainGreen py-3 w-42.5 bg-white rounded-xl border border-[#f1f5f9]' : 'text-[#90A1B9] py-3 w-42.5'}>
              <p className="text-[14px] text-center">Take Away</p>
            </button>
          </div>
        </div>
        <div className="w-full grow h-10 overflow-auto">
          <SideCartProducts items={cart} />
        </div>
        <CartSummary />
      </div>
    </div>
  );
}
