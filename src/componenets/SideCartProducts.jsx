import { FiMinus, FiPlus } from 'react-icons/fi';
import noImg from '../assets/Noimg.png';
import { domain, useCart } from '../store';
export default function SideCartProducts({ items }) {
  const { cart, setCart } = useCart();
  const decrementQty = (index) => {
    let copy = [...cart];
    if (copy[index].qty > 1) {
      copy[index].qty--;
    } else {
      copy.splice(index, 1);
    }
    setCart(copy);
  };

  const incrementQty = (index) => {
    let copy = [...cart];
    copy[index].qty++;
    setCart(copy);
  };
  return (
    <div className="flex flex-col items-center w-full p-6 h-full">
      <div className="flex flex-col gap-6 w-full">
        {items.map((el, index) => (
          <div key={el.documentId} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#F1F5F9]">
                <img src={el.img ? domain + el.img?.url : noImg} alt={el.name} className="rounded-2xl" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="text-textDark text-[14px] font-bold">{el.name}</h4>
                <h4 className="text-mainGreen text-[12px] font-bold">{el.price.toFixed(2)}</h4>
              </div>
            </div>
            <div className="w-26.5 flex p-3.5 bg-[#F8FAFC] border border-border rounded-xl justify-between items-center">
              <button className="cursor-pointer" onClick={() => decrementQty(index)}>
                <FiMinus className="text-[12px]" />
              </button>
              <p className="text-[12px] font-black">{el.qty}</p>
              <button className="cursor-pointer" onClick={() => incrementQty(index)}>
                <FiPlus className="text-[12px] text-mainGreen" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
