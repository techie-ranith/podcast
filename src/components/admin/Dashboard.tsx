import React from 'react'
import { EpisodeCard } from 'components/admin'

import ApplePodcast from '/public/images/Apple_podcasts.svg'
import Spotify from '/public/images/Spotify.svg'
import RSS from '/public/images/RSS.svg'
import OverCast from '/public/images/Overcast.svg'
import Image from 'next/image'

const Dashboard = () => {
  const episodeCards = Array.from({ length: 6 }, (_, index) => (
    <EpisodeCard key={index}></EpisodeCard>
  ))

  return (
    <div className="flex items-center justify-center border w-full">
      <div className="flex-1">{episodeCards}</div>
      <div className="flex flex-col  flex-1 border">
        <div className="users"></div>
        <div className="flex items-center justify-center flex-col gap-20">
          <div className="flex items-center justify-center gap-4">
            <Image src={ApplePodcast} alt="apple"></Image>
            <div>Apple Podcast</div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Image src={Spotify} alt="Spotify"></Image>
            <div>Spotify</div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={RSS} alt="RSS"></Image>
            <div>RSS</div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={OverCast} alt="Overcast"></Image>
            <div>podcast</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
