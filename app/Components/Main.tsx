import Image from "next/image";
import Shoesnike from "@/public/shoes-nike.png";

const Main = () => {
  return (
    <div className="ml-[35px] flex items-center">
      <div>
        <h1 className="uppercase text-[162px] italic font-Barlow  font-bold  ">
          air max
        </h1>
        <h2 className="uppercase tracking-[9.712px] tight text-[58px] italic font-Barlow font-medium">
          nike air max 90
        </h2>
        <h3 className="text-[58px] font-medium mt-[26px]">$98</h3>
        <p className="max-w-[574px] mt-[50px] italic text-[#585c79e3] font-Barlow font-medium uppercase text-[15px]  ">
          Originally designed for performance running, the Max Air unit in the
          heel adds unbelievable cushioning. The low-top design combines with a
          padded collar for a sleek look that feels soft and comfortable.
        </p>

        <div className="relative flex-shrink-0">
          <button
            className="uppercase text-[#130505] text-[25px] relative w-[189px] h-[64px] bg-[#979090] rounded-[20px] mt-[113px] "
            type="submit"
          >
            add to cart
          </button>{" "}
          <div className="w-[148px] h-[148px] bg-[#99999926] stroke-[#9A8B8B] rounded-full backdrop-blur-lg stroke-[0.5px] absolute left-[144px] top-[0]"></div>
        </div>
      </div>
      <div className="relative">
        <div className="w-[249px] h-[249px] bg-[#99999926] stroke-[#9A8B8B] rounded-full backdrop-blur-lg stroke-[0.5px] absolute left-[94px] top-[51px] z-0"></div>
        <Image
          src={Shoesnike}
          width={610.884}
          height={573}
          alt="shoes"
          className="relative z-10"
        />
        <div className="  w-[148px] h-[148px] bg-[#99999926] stroke-[#9A8B8B] rounded-full backdrop-blur-lg stroke-[0.5px] absolute left-[60px] top-[20px]"></div>
        <div className="w-[196px] h-[196px] bg-[#99999926] stroke-[#9A8B8B] rounded-full backdrop-blur-lg stroke-[0.5px] absolute right-[-25px] top-[0] z-20"></div>
        <div className="w-[196px] h-[196px] bg-[#99999926] stroke-[#9A8B8B] rounded-full backdrop-blur-lg stroke-[0.5px] absolute left-[245px] bottom-[64px] z-20"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Main;
