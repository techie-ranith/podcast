import React from 'react'
import { Button, Container } from '../common'
import Image from 'next/image'

import bg from '/public/images/bgimg1.svg'

import playIcon from '/public/images/play.svg'
import saveIcon from '/public/images/save.png'

import '../../styles/fonts/fonts'

const Popular_ep = (props) => {
  /* const { backGround, speakerInfo, episodeTitle, heading } = props; */

  /* const bgImgStyle = {
    backgroundImage: `linear-gradient(to bottom,transparent, rgba(0, 0, 0, 0.8)), url(${backGround})`,
    backgroundSize: "contain", // or 'contain' depending on your preference
    backgroundRepeat: "no-repeat",
    width: "282px",
    height: "328px",
    left: "426px",
  }; */

  return (
    <Container>
      <div className="rounded-3xl border-2 w-fit h-fit group">
        <div className="relative w-auto border-gray-900 border-2 ">
          <img src={bg.src} alt="Background" />
          <div className="absolute w-full h-full  flex flex-col justify-between -bottom-0 rounded-3xl bg-gradient-to-t bg-opacity-75 from-gray-900  to-transparent p-2">
            <div className="flex justify-end">
              <Button
                variant={'black'}
                size={'rounded'}
                className="bg-gray outline text-gray-0 backdrop-blur-lg h-7 px-2 font-inter linear"
              >
                speakerInfo
              </Button>
            </div>

            <div className="text-gray-0  mt-auto font-quicksand">heading</div>
            <div className="flex flex-row justify-between ">
              <div className="text-gray-0 mt-2 font-inter">episodetitle</div>
              <div className="">
                <Button className="bg-gray" variant={'black'} size={'icon'}>
                  <Image src={playIcon} alt="icon"></Image>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Popular_ep
