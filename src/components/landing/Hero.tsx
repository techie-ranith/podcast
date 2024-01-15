import React from "react";
import { Button, Container } from "../common";
import "../../styles/fonts/fonts";

// images
import Image from "next/image";
import Hero_img from "/public/images/Hero_img.svg";
import spotify from "/public/images/Spotify.svg";
import apple_podcast from "/public/images/Apple_podcasts.svg";
import overcast from "/public/images/Overcast.svg";
import rss from "/public/images/RSS.svg";
import listners from "/public/images/listners.svg";
// hero image
import tl from "/public/images/tl.png";
import tr from "/public/images/tr.png";
import bl from "/public/images/bl.png";
import br from "/public/images/br.png";

import { url } from "inspector";
import { SaveAll } from "lucide-react";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

const hero = () => {
  return (
    <Container>
      <div className="flex lg:flex-row xs:flex-col gap-4 items-center justify-center mt-4 mb-4 xs:h-screen text-gray-900 text-lg font-medium h-screen">
        <div className="w-[60%] flex flex-col justify-evenly items-start h-full">
          <div className="flex items-center justify-center gap-6 bg-gray-200 rounded-full pr-4">
            <div>
              <Button variant={"blue"} size={"rounded"}>
                New
              </Button>
            </div>
            <div>Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="text-5xl w-[80%] whitespace-pre-line font-inter font-medium">
            Exploring Tomorrow's{"\n"}
            Tech Innovations, {"\n"}
            One Byte at a Time.{"\n"}
          </div>
          <div className="text-md  w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
            est leo. Nulla fermentum ultrices ullamcorper. Nam eleifend mi sed
            sem convallis condimentum.
          </div>
          <div>
            <Button variant={"blue"} size={"lg"}>
              Browse Podcast &gt;
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div>Listen on: </div>
            <div className="flex items-center gap-4 justify-center animate ">
              <a href="">
                <Image src={spotify} alt="icon"></Image>
              </a>
              <a href="">
                <Image src={apple_podcast} alt="icon"></Image>
              </a>
              <a href="">
                <Image src={overcast} alt="icon"></Image>
              </a>
              <a href="">
                <Image src={rss} alt="icon"></Image>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex items-center flex-col justify-center gap-10">
          <div className="flex items-center justify-center">
            <div className=" w-full bg-center bg-cover relative grid grid-cols-2 grid-rows-2 gap-4">
              <div className="rounded-full bg-blue-800 h-24 w-24  absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-0 text-center z-2 whitespace-pre-line ">
                20+ {"\n"} Podcasts
              </div>
              <Image src={tl} alt="" className="col-1 row-1 p-0 m-0"></Image>
              <Image src={tr} alt="" className="col-2 row-1 p-0 m-0"></Image>
              <Image src={bl} alt="" className="col-1 row-2 p-0 m-0"></Image>
              <Image src={br} alt="" className="col-2 row-2 p-0 m-0"></Image>
            </div>
          </div>
          <div className="w-full flex text-sm items-center justify-center gap-6">
            <div className=" flex flex-1 h-full relative items-center justify-end">
              <Image
                src={listners}
                objectFit="contain"
                objectPosition="center"
                alt="icon"
              ></Image>
            </div>
            <div className="flex-1">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

{
}

export default hero;
