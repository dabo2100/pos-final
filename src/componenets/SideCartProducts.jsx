import { FiMinus, FiPlus } from "react-icons/fi";

export default function SideCartProducts({ items, incrementQty, decrementQty }) {

  return (
    <div className="flex flex-col items-center w-full p-6">
      <div className="flex flex-col gap-6 w-full">
        {items.map((el, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#F1F5F9]">
                <img src={el.image} alt={el.name} className="rounded-2xl" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="text-textDark text-[14px] font-bold">
                  {el.name}
                </h4>
                <h4 className="text-mainGreen text-[12px] font-bold">
                  {el.price.toFixed(2)}
                </h4>
              </div>
            </div>
            <div className="w-26.5 flex p-3.5 bg-[#F8FAFC] border border-border rounded-xl justify-between items-center">
              <button
                className="cursor-pointer"
                onClick={() => decrementQty(index)}
              >
                <FiMinus className="text-[12px]" />
              </button>
              <p>{el.qty}</p>
              <button
                className="cursor-pointer"
                onClick={() => incrementQty(index)}
              >
                <FiPlus className="text-[12px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
