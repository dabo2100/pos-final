import { IoMdArrowForward } from 'react-icons/io'

export default function CartSummary({subtotal, tax}) {
  return (
    <div className="flex flex-col w-full bg-[#F8FAFC]/50 p-8 border-t border-t-[#F1F5F9]">
          <div className="flex flex-col gap-2 pb-2">
            <div className="flex justify-between items-center">
              <p className="text-[#90A1B9] text-[12px] font-bold tracking-[1.2px]">Subtotal</p>
              <p className="text-textDark text-[12px] font-bold tracking-[1.2px]">$ {subtotal}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#90A1B9] text-[12px] font-bold tracking-[1.2px]">Service Tax (5%)</p>
              <p className="text-textDark text-[12px] font-bold tracking-[1.2px]">$ {tax.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex flex-col pt-4 mb-6 border-t border-t-[#E2E8F0]">
            <div className="flex justify-between items-center">
              <p className="text-textDark text-[20px] font-lexend font-bold">Total Due</p>
              <p className="text-mainGreen text-[30px] font-bold">$ {(subtotal + tax).toFixed(2)}</p>
            </div>
          </div>
          <button className="flex justify-center items-center gap-3 cursor-pointer py-5 rounded-2xl bg-mainGreen text-white shadow-xl shadow-mainGreen/30">
              <p className="text-white text-[14px] font-bold tracking-[1.4px]">Proceed to Checkout</p>
              <IoMdArrowForward className="text-[16px]"/>
          </button>
        </div>
  )
}
