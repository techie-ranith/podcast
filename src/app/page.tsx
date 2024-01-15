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
  return (
    <>
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
    </>
  )
}

export default Home
