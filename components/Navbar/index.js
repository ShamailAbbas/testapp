import React from 'react';

const Navbar = () => {
  return (
    <div className="w-screen px-12 py-5">
      <section className="flex justify-between items-center">
        <h1 className="font-NotoSansJP font-[700] text-[20px] sm:text-[24px]">
          SAMPLE LOGO
        </h1>
        <div className="flex justify-between  items-center uppercase ">
          <p className="font-NotoSansJP font-[700] text-[12px] md:text-[14px]   px-4 text-[#000000] uppercase">
            プラン
          </p>
          <div className="bg-gray-200 w-[42px] h-[42px] rounded-[50%] flex items-center justify-center">
            <p className="font-NotoSansJP font-[700] text-[12px]   px-4 text-[#000000] uppercase">
              S
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
