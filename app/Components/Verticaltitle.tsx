import Image from "next/image";
import Nikelogo from "@/public/nike-logo.png";

const Verticaltitle = () => {
  return (
    <div className="w-[122px] bg-[#A7A4A4] h-[900px] font-semibold shrink-0">
      <Image
        className="mt-[15px] mb-[40px] px-[7px]"
        src={Nikelogo}
        width={119}
        height={119}
        alt="nike logo"
      />

      <div className="flex rotate-[90deg] tracking-[34px] uppercase text-[20px] ">
        <h1 className="ml-[30px]">style </h1>
        <h1 className="mx-[40px]">takes </h1>
        <h1>over</h1>
      </div>
    </div>
  );
};

export default Verticaltitle;
