import React from "react";
import Hero from "@/components/landing/Hero";
import Popular_ep from "@/components/popular_episodes/popular_ep";
import Latest from "@/components/latest_episode/latest";
import Popular_ep2 from "@/components/popular_episodes/Popular_ep2"; // Fix: Correct the casing of the file path
import Popular from "@/components/popular_ep/Popular";
import Logos from "@/components/landing/logos";
import FOSS_Section from "@/components/landing/foss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <Latest />
      <Popular_ep />
      <Popular_ep2 />
      <FOSS_Section />
      <Logos />
    </div>
  );
};

export default Home;
