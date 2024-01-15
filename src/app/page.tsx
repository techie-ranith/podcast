import React from "react";
import Hero from "@/components/landing/Hero";
import Popular_ep from "@/components/Popular_episodes/Popular_ep";

import bgImage1 from "/public/images/bgimg1.svg";
import bgImage2 from "/public/images/bgimg2.svg";
import bgImage3 from "/public/images/bgimg3.svg";
import bgImage4 from "/public/images/bgimg4.svg";

type Props = {};

const Home = (props: Props) => {
  const card1 = {
    backGround: bgImage1.src,
    speakerInfo: "Speaker Name 3 | x minutes",
    episodeTitle: "Ep 1",
    heading: "Heading 1",
  };
  const card2 = {
    backGround: bgImage2.src,
    speakerInfo: "Speaker Name 3 | x minutes",
    episodeTitle: "Ep 2",
    heading: "Heading 2",
  };

  const card3 = {
    backGround: bgImage3.src,
    speakerInfo: "Speaker Name 3 | x minutes",
    episodeTitle: "Ep 3",
    heading: "Heading 3",
  };

  const card4 = {
    backGround: bgImage4.src,
    speakerInfo: "Speaker Name 4 | x minutes",
    episodeTitle: "Ep 4",
    heading: "Heading 4",
  };

  return (
    <div>
      {/* <Hero /> */}

      <div className="flex">
        <Popular_ep {...card1} />
        <Popular_ep {...card2} />
        <Popular_ep {...card3} />
        <Popular_ep {...card4} />
      </div>
    </div>
  );
};

export default Home;
