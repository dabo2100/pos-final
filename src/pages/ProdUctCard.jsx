import { AiOutlinePlus } from "react-icons/ai";

export default function ProdUctCard({ el }) {
  let cardStyle = `card border border-[#F1F5F9] h-109.25 w-76.75 p-4 rounded-4xl shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] `;
  return (
    <div className={cardStyle}>
      <figure>
        <img src={el.img} alt="Shoes" className="rounded-4xl  h-68.25 " />
      </figure>
      <div className="card-body">
        <h2 className="  text-textDark font-lexend font-bold not-italic text-[18px] leading-7 tracking-normal align-middle">
          {el.name}
        </h2>
        <p className="text-[#90A1B9] text-[12px]">{el.description}</p>
        <div className="card-actions ">
          <div className="justify-between w-full flex items-center h-13">
            <span className="text-[20px]  text-mainGreen h-7 leading-7">
              {el.price}
            </span>
            <button className="btn btn-primary rounded-xl py-5 px-3 bg-mainGreen border-none">
              <AiOutlinePlus className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
