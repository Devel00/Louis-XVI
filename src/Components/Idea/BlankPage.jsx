import React from "react";
import { TbDatabaseSearch } from "react-icons/tb";

const BlankPage = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className=" flex justify-center items-center flex-col gap-6">
        <TbDatabaseSearch size={80} className=" " />
        <span className=" font-main text-[22px] ">
          نتایجی برای نمایش وجود ندارد!
        </span>
      </div>
    </div>
  );
};

export default BlankPage;
