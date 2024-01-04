import React from "react";
import Hero from "@/components/landing/Hero";
import Popular_ep from "@/components/Popular_episodes/Popular_ep";
import Popular_ep2 from "@/components/Popular_episodes/Popular_ep2";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <Popular_ep />
      <Popular_ep2 />
    </div>
  );
};

export default Home;
