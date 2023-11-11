import React from "react";
import { Button } from "@/components/common/buttons";

type Props = {};

const Savedbar = (props: Props) => {
  return (
    <>
      <div className="w-full bg-gray-900 h-[44px] ">
        <div className="flex justify-center items-center text-gray-0 text-[12px]  ">
          <div className="h-[44px] flex items-center w-[540px] justify-center grid-col-3 gap-x-[16px] col-3">
            <div className="bg-opacity-30 ">
              <button className="bg-[#7977E84D] h-[28px] w-[167px] rounded-[180px]">
                {" "}
                You have nothing saved
              </button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur </p>
            <div>
              <button className="border border-blue-200 h-[28px] w-[115px] rounded-[5px]">
                View episodes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Savedbar;
