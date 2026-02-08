import { AiOutlinePlus } from "react-icons/ai";

export default function ProdUctCard({ el }) {
  let cardStyle = `card border border-[#F1F5F9] h-109.75 w-76.75 p-4 rounded-4xl shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1) ] gap-5 flex flex-col`;

  return (
    <div className={cardStyle}>
      <img src={el.img} alt="Shoes" className="rounded-4xl h-68.25" />
      <div className="w-full grow  flex flex-col items-start justify-start gap-1 pb-2 pr-2 pl-2 ">
        <h1 className="font-Lexend font-bold text-[18px] leading-7 tracking-[0px] align-middle">
          {el.name}
        </h1>
        <p className="text-[#90A1B9] font-Lexend text-[12px] leading-5 tracking-[0px]">
          {el.description}
        </p>
        <div className="items-end justify-between flex w-full h-13 ">
          <p className=" text-mainGreen text-xl leading-7 tracking-[0px] align-middle">
            {el.price}
          </p>
          <button className="p-3 cursor-pointer bg-mainGreen rounded-xl text-white text-xl">
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
}
