import React from 'react'
import Hero from '@/components/landing/Hero'
import Popular_epi_sec from '@/components/popular_epi_sec/popular_epi_sec'

import { Savedbar } from '@/components/common/layout/'
import { Container } from '@/components/common'
import Latest from '@/components/latest_episode/latest'
import Logos from '@/components/landing/logos'
import FOSS_Section from '@/components/landing/foss'

// Images
import bgImage1 from '/public/images/bgimg1.svg'
import bgImage2 from '/public/images/bgimg2.svg'
import bgImage3 from '/public/images/bgimg3.svg'
import bgImage4 from '/public/images/bgimg4.svg'
import EpisodeSection from '@/components/common/layout/Episode_section'
import Newsletter from '@/components/common/layout/Newsletter'
import Containerf from '@/components/common/containerf'

type Props = {}

const Home = (props: Props) => {
  const card1 = {
    backGround: bgImage1.src,
    speakerInfo: 'Speaker Name 3 | x minutes',
    episodeTitle: 'Ep 1',
    heading: 'Heading 1',
  }
  const card2 = {
    backGround: bgImage2.src,
    speakerInfo: 'Speaker Name 3 | x minutes',
    episodeTitle: 'Ep 2',
    heading: 'Heading 2',
  }

  const card3 = {
    backGround: bgImage3.src,
    speakerInfo: 'Speaker Name 3 | x minutes',
    episodeTitle: 'Ep 3',
    heading: 'Heading 3',
  }

  const card4 = {
    backGround: bgImage4.src,
    speakerInfo: 'Speaker Name 4 | x minutes',
    episodeTitle: 'Ep 4',
    heading: 'Heading 4',
  }

  return (
    <div>
      <Savedbar />
      <Hero />
      <Popular_epi_sec></Popular_epi_sec>
      <Latest />
      <EpisodeSection />
      <Containerf>
        <FOSS_Section />
      </Containerf>
      <Logos />

      <Newsletter />
    </div>
  )
}

export default Home
