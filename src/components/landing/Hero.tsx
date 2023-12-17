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

import { url } from "inspector";
import { SaveAll } from "lucide-react";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

const hero = () => {
  return (
    <Container>
      <div className="flex items-center justify-center mt-4 mb-4 h-screen">
        <div className="w-[60%] flex flex-col justify-evenly items-start m-4 h-full">
          <div className="flex items-center justify-center gap-6 bg-gray-200 rounded-full pr-4">
            <div>
              <Button variant={"blue"} size={"rounded"}>
                New
              </Button>
            </div>
            <div>Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="text-5xl w-[80%] whitespace-pre-line">
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
            <div className="flex items-center gap-4 justify-center">
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
        <div className="w-[40%] flex items-center flex-col justify-center h-full">
          <div className="w-full h-[95%] image p-8">
            <Image src={Hero_img} alt="hero image"></Image>
          </div>
          <div className="h-[5%] w-full flex text-sm items-center justify-center ">
            <div className="flex-1 h-full relative justify-end">
              <Image
                src={listners}
                layout="fill"
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

export default hero;
