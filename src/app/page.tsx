import React from "react";
import Hero from "@/components/landing/Hero";
import Popular_ep from "@/components/Popular_episodes/Popular_ep";
import Popular_epi_sec from "@/components/popular_epi_sec/popular_epi_sec";
import bgImage1 from "/public/images/bgimg1.svg";
import bgImage2 from "/public/images/bgimg2.svg";
import bgImage3 from "/public/images/bgimg3.svg";
import bgImage4 from "/public/images/bgimg4.svg";
import { Savedbar } from '@/components/common/layout/'
import { Container } from '@/components/common'
import React from 'react'
import Hero from '@/components/landing/Hero'
import Popular_ep from '@/components/popular_episodes/popular_ep'
import Latest from '@/components/latest_episode/latest'
import Popular_ep2 from '@/components/popular_episodes/Popular_ep2' // Fix: Correct the casing of the file path
import Logos from '@/components/landing/logos'
import Episodecard from '@/components/common/layout/episode-card'
import FOSS_Section from '@/components/landing/foss'


type Props = {}

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
            <div>
        <Savedbar />
        <Hero />
        <Popular_ep2 />
        <Popular_ep />
        <Latest />
        <Episodecard />
        <Container>
          <FOSS_Section />
          <Logos />
        </Container>
      </div>
      Popular_epi_sec
    </div>
  );
};


export default Home
