import React from 'react'
import { Button } from '../common' // Assuming '../common' contains the Button component
import Image from 'next/image'
import playIcon from '/public/images/play.svg'
import '../../styles/fonts/fonts' // Are you trying to import fonts? You might want to use @font-face for that

// Define props interface
interface PopularEpProps {
  backGround: string
  speakerInfo: string
  episodeTitle: string
  heading: string
}

const PopularEp: React.FC<PopularEpProps> = ({
  backGround,
  speakerInfo,
  episodeTitle,
  heading,
}) => {
  return (
    <div className="w-fit h-fit">
      <div className="rounded-[20px]  w-fit h-fit group">
        <div className="relative w-fit">
          <img src={backGround} alt="Background" />{' '}
          {/* Assuming `backGround` is passed as a prop */}
          <div className="absolute w-full h-full  flex flex-col justify-between -bottom-0 rounded-[20px] bg-gradient-to-t bg-opacity-75 from-gray-900  to-transparent p-4">
            <div className="flex justify-end">
              <Button
                variant={'black'}
                size={'rounded'}
                className="bg-gray outline text-gray-0 backdrop-blur-lg h-7 px-2 font-inter linear"
              >
                {speakerInfo}
              </Button>
            </div>
            <div className="text-gray-0  mt-auto font-quicksand">{heading}</div>
            <div className="flex flex-row justify-between ">
              <div className="text-gray-0 mt-2 font-inter">{episodeTitle}</div>
              <div className="">
                <Button className="bg-gray" variant={'black'} size={'icon'}>
                  <Image src={playIcon} alt="icon" />{' '}
                  {/* Using the Image component from Next.js */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularEp
