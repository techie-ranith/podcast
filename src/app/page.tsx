import React from "react";
import Hero from "@/components/landing/Hero";
import Popular from "@/components/popular_ep/Popular";
import Logos from "@/components/landing/logos";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <Logos />
    </div>
  );
};

export default Home;
