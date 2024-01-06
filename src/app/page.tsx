import React from "react";
import Hero from "@/components/landing/Hero";
import Popular from "@/components/popular_ep/Popular";
import Logos from "@/components/landing/logos";
import FOSS_Section from "@/components/landing/foss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <FOSS_Section />
      <Logos />
    </div>
  );
};

export default Home;
