import React from "react";
import { Button, Container } from "../common";
import "../../styles/fonts/fonts";
import Image from "next/image";
import FOSS_Pictures from "/public/images/FOSS pictures.png";
import { IoIosArrowForward } from "react-icons/io";

const FOSS_Section = () => {
  const customWidth = "26rem";
  return (
    <Container>
      <div className="grid grid-col-1 md:grid-cols-2 mt-20">
        <div className="felx item-start flex-col items-start justify-between">
          <div
            style={{ width: customWidth }}
            className="flex items-center justify-right gap-4 bg-gray-50 rounded-full pr-4"
          >
            <div>
              <Button variant={"blue"} size={"rounded"}>
                Who are we?
              </Button>
            </div>
            <div>We’re the FOSS Community of NSBM</div>
          </div>
          <br />
          <h1 className="text-5xl md:text-6xl font-medium tracking-wide px-3 py-3">
            Sri Lanka’s first ever University based FOSS Community
          </h1>
          <br />
          <h1 className="text-4l text-gray-900 px-3 py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
            est leo. Nulla fermentum ultrices ullamcorper. Nam eleifend mi sed
            sem convallis condimentum.
          </h1>
          <br />
          <div className="px-3 py-3">
            <Button>
              Keep in touch with us
              <IoIosArrowForward className="ml-4" />
            </Button>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center w-full h-full">
          <Image
            src={FOSS_Pictures}
            alt={"FOSS_Section image"}
            width={450}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
};

export default FOSS_Section;
