import React from 'react'
import Image from 'next/image'
import Containerf from '@/components/common/containerf'
import {
  BluetoothConnected,
  PlaneIcon,
  PlayCircle,
  PlayIcon,
  Share,
} from 'lucide-react'

import { Button } from '../buttons'

type Props = {}

const Episode_card = () => {
  return (
    <div className=" pt-11">
      <div className="w-full ">
        <div className="w-auto h-fit rounded-[10px] ring-2 ring-gray-0 flex p-[40px] bg-blue-200  flex-col sm:flex-row  ">
          <div>
            <Image
              src="/man.png"
              width={933.7}
              height={345}
              alt="Description of the image"
            />

            <div className="text-gray-0 w-[240-px] h-auto grid justify-center ">
              <p>Speaker Name</p>
              <p className="relative pl-5">Position</p>
            </div>
          </div>

          <div className="text-gray-0 pl-[40px]">
            <p className="w-[629px] h-[39px] ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
            <p className="w-[328px] h-[26px] text-[16px] text-gray-200">
              Episode 08 | 11th November 2023 | 27 min
            </p>
            <br></br>
            <p className="w-auto   h-auto text-[18px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit
              dolor, molestie id rutrum a, sodales ut magna. Vestibulum
              scelerisque at risus non volutpat. Etiam elit est, placerat id
              tincidunt a, maximus id sem. Duis ultricies et augue consequat
              lacinia. Nulla sed tincidunt tellus. In hendrerit massa at nisl
              mollis commodo. Pellentesque mattis eros nec lorem malesuada
              semper.
            </p>

            <div className="flex grid-cols-3 gap-5 pt-6 ">
              <Button>
                Listen now <PlayCircle className="pl-[10px]" />
              </Button>
              <Button>
                Share <Share className="pl-[10px]" />
              </Button>
              <Button>
                Save <PlaneIcon className="pl-[10px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episode_card
