import React from 'react';

const Card = () => {
  return (
    <div className="w-full mb-12  flex flex-col items-start border-2 rounded-lg border-[#F1F4FB] h-[328px]">
      <div className="w-full  h-[160px] bg-[#95CCC9] relative">
        <h3 className="absolute bottom-5 left-5 font-NotoSansJP font-[700] text-[16px] text-[#FFFFFF]">
          Blog Generator
        </h3>
      </div>
      <p className="px-4 font-NotoSansJP font-[700] text-[16px] text-[#0B153D] mt-4 mb-2">
        Blog Generator
      </p>
      <p className="px-4 font-NotoSansJP font-[700] text-[14px] text-[#757D97] mb-3">
        Here is a sample of blog generation. You can generate a blog using this
      </p>
      <div className="flex  items-center justify-center  px-4">
        <div className="bg-gray-200 w-[27px] h-[27px] rounded-[50%] "></div>
        <p className="font-NotoSansJP font-[700] text-[12px]   ml-2 text-[#000000] uppercase">
          Sample Logo
        </p>
      </div>
    </div>
  );
};

export default Card;
