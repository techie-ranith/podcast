import React from 'react'
import { Button, Container } from '../common'
import Containerp from '../common/containerp'
import Containerf from '../common/containerf'
import Image from 'next/image'

import playIcon from '/public/images/play.svg'
import saveIcon from '/public/images/save.png'

import '../../styles/fonts/fonts'

const popular_ep_sec = () => {
  return (
    <Containerp>
      <div className="flex flex-col  bg-gray-900 w-full h-full p-10 justify-between">
        <Containerf>
          <div className="flex flex-row justify-center ">
            <div className="text-gray-0 font-inter text-7xl text-left ">
              Most popular <br />
              Episodes On
              <span className="text-blue-200 font-semibold"> Dialectic.</span>
            </div>
            <div className="text-gray-0 font-quicksand text-lg text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Fusce eu arcu sit amet libero facilisis pulvinar ac sed dui.
              <br />
              Curabitur et vulputate lorem.
            </div>
          </div>

          <div></div>
        </Containerf>
      </div>
    </Containerp>
  )
}

export default popular_ep_sec
