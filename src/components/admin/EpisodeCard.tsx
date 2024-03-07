import React from 'react'
import Image from 'next/image'
import Containerf from 'components/common/layout/containerf'
import man from '/public/images/man.png'
import { Button } from 'components/common/buttons'

import {
  BluetoothConnected,
  PlaneIcon,
  PlayCircle,
  PlayIcon,
  Share,
} from 'lucide-react'

const EpisodeCard = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 px-8 py-2 border-2 rounded-xl bg-blue-200 border-white-0 text-white-0 max-w-auto">
      <div className="flex flex-col items-center justify-between sm:w-[40%]">
        <div className="">
          <Image
            src={man}
            alt="man"
            className="border rounded-lg"
            width={400}
          ></Image>
        </div>
        <div>Speaker Name</div>
      </div>
      <div className="flex flex-col sm:items-start justify-center sm:gap-10 gap-4 max-w-auto text-justify">
        <div className="font-semibold text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  )
}

export default EpisodeCard
