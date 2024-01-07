import React from "react";
import Hero from "@/components/landing/Hero";
import Popular_ep from "@/components/popular_episodes/popular_ep";
import Popular_ep2 from "@/components/popular_episodes/Popular_ep2"; // Fix: Correct the casing of the file path

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
