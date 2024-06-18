import React from "react";

const ServicePage = () => {
  return (
    <div className="w-full flex flex-col justify-center px-[10%] mt-[50px]">
      <div className="items-center mb-[20px]">
        <div className="text-center">
          <h3 className="text-[#023F88] text-2xl md:text-4xl font-semibold border-b-2 border-orange-500 inline-block mb-4">
            Service Activities Of The Hospital
          </h3>
        </div>
        <div className="flex justify-start w-full">
          <div className="text-left text-black font-[Roboto, sans-serif] w-full text-lg opacity-90 space-y-4">
            <p>Free treatment for orphans.</p>
            <p>Concessional treatment for children of disabled parents.</p>
            <p>Concessional treatment to children of widowed mothers.</p>
            <p>BP concessional treatment to L card holders.</p>
            <p>Rahat Bhavno Medical Store in Hospital.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
