import React, { useState } from 'react'
import Hero from '@/components/landing/Hero'
import Popular_epi_sec from '@/components/popular_epi_sec/popular_epi_sec'
import { Footer, Navigation, Savedbar } from '@/components/common/layout/'
import Latest from '@/components/latest_episode/latest'
import Logos from '@/components/landing/logos'
import FOSS_Section from '@/components/landing/foss'

import EpisodeSection from '@/components/common/layout/Episode_section'
import Newsletter from '@/components/common/layout/Newsletter'
import Containerf from '@/components/common/containerf'
import { Container } from '@/components/common'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Savedbar />
      <Container>
        <div className="">
          <Navigation />
          <Hero />
        </div>
      </Container>
      <Popular_epi_sec></Popular_epi_sec>
      <Latest />
      <EpisodeSection />
      <Containerf>
        <FOSS_Section />
        <Logos />
      </Containerf>
      <Newsletter />
      <Footer></Footer>
    </div>
  )
}

export default Home
