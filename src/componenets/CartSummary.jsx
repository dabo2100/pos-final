import { useEffect, useState } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { domain, useCart, useType } from '../store';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function CartSummary() {
  const { cart, setCart } = useCart();
  const { type } = useType();
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    let newTotal = cart.reduce((acc, el) => acc + el.qty * el.price, 0);
    setTax(0.05 * newTotal);
    setSubTotal(newTotal);
  }, [cart]);

  const saveOrder = () => {
    let orderData = { users_permissions_user: JSON.parse(sessionStorage.getItem('user')).id, type: type, order_status: 'Preparing', method: 'Cash', amount: subTotal + tax };
    let url = domain + '/api/orders';
    axios.post(url, { data: orderData }).then((res) => {
      let order_id = res.data.data.documentId;
      cart.forEach(async (el) => {
        let item_data = { product: el.documentId, order: order_id, qty: el.qty };
        let url = domain + '/api/order-items';
        await axios.post(url, { data: item_data });
      });
      toast.success('Order Saved Success');
      setCart([]);
    });
  };

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC]/50 p-8 border-t border-t-[#F1F5F9]">
      <div className="flex flex-col gap-2 pb-2">
        <div className="flex justify-between items-center">
          <p className="text-[#90A1B9] text-[12px] font-bold tracking-[1.2px]">Subtotal</p>
          <p className="text-textDark text-[12px] font-bold tracking-[1.2px]">$ {subTotal}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#90A1B9] text-[12px] font-bold tracking-[1.2px]">Service Tax (5%)</p>
          <p className="text-textDark text-[12px] font-bold tracking-[1.2px]">$ {tax.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex flex-col pt-4 mb-6 border-t border-t-[#E2E8F0]">
        <div className="flex justify-between items-center">
          <p className="text-textDark text-[20px] font-lexend font-bold">Total Due</p>
          <p className="text-mainGreen text-[30px] font-bold">$ {(subTotal + tax).toFixed(2)}</p>
        </div>
      </div>
      <button onClick={saveOrder} className="flex justify-center items-center gap-3 cursor-pointer py-5 rounded-2xl bg-mainGreen text-white shadow-xl shadow-mainGreen/30">
        <p className="text-white text-[14px] font-bold tracking-[1.4px]">Proceed to Checkout</p>
        <IoMdArrowForward className="text-[16px]" />
      </button>
    </div>
  );
}
