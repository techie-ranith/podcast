import React from "react";
import { Button, Container } from "../common";
import Image from "next/image";
import bgImage from "/public/images/bgImg.png";
import playIcon from "/public/images/play.svg";
import saveIcon from "/public/images/save.png";
import bgImage2 from "/public/images/bgImg2.png";

import "../../styles/fonts/fonts";

const Popular_ep = () => {
  const bgImgStyle = {
    backgroundImage: `linear-gradient(to bottom,transparent, rgba(0, 0, 0, 0.8)), url(${bgImage2.src})`,
    backgroundSize: "contain", // or 'contain' depending on your preference
    backgroundRepeat: "no-repeat",
    width: "282px",
    height: "328px",
    left: "426px",
  };

  return (
    <Container>
      <div
        className="flex flex-col justify-between p-5  rounded-2xl overflow-hidden"
        style={bgImgStyle}
      >
        <div className="flex justify-end  ">
          <Button
            variant={"black"}
            size={"rounded"}
            className="bg-gray outline text-gray-0 backdrop-blur-md h-7 px-2 hover:bg-gray-900 hover:text-gray-0 font-inter"
          >
            Speaker Name | 33 minutes
          </Button>
        </div>

        <div className="text-gray-0  mt-auto font-quicksand">
          Lorem ipsum dolor sit amet consectetur adipiscing
        </div>

        <div className="flex flex-row justify-between ">
          <div className="text-gray-0 mt-2 font-inter">Episode 2</div>
          <div className="">
            <Button
              className="bg-gray transition transform hover:scale-110 hover:bg-gray hover:border-transparent"
              variant={"black"}
              size={"icon"}
            >
              <Image src={playIcon} alt="icon"></Image>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Popular_ep;
