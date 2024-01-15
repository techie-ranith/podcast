import { Episodecard, Savedbar } from '@/components/common/layout/'

import React from 'react'
import Hero from '@/components/landing/Hero'
import Popular_ep from '@/components/popular_episodes/popular_ep'
import Popular_ep2 from '@/components/popular_episodes/Popular_ep2'
import Latest from '@/components/latest_episode/latest'
import FOSS_Section from '@/components/landing/foss'
import Logos from '@/components/landing/logos'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Hero></Hero>
      <Popular_ep2></Popular_ep2>
      <Popular_ep></Popular_ep>
      <Latest></Latest>
      <Episodecard></Episodecard>
      <FOSS_Section></FOSS_Section>
      <Logos></Logos>
    </>
  )
}

export default Home
