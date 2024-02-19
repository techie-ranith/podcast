import React from 'react'
import Image from 'next/image'
import FOSS_Pictures from '/public/images/FOSS pictures.png'
import { Button } from 'components/common/buttons'
import { Containerf } from 'components/common/'

const foss = () => {
  return (
    <Containerf>
      <div className="flex items-center justify-between sm:flex-row flex-col sm:gap-40 gap-4 my-6">
        <div className="flex flex-1 flex-col items-start whitespace-pre-line justify-evenly gap-10">
          <div className="flex items-center justify-center sm:text-base text-xs gap-6 bg-gray-200 rounded-full pr-4">
            <div>
              <Button variant={'blue'} size={'rounded'}>
                Who are we ?
              </Button>
            </div>
            <div className="">We are the FOSS Community of NSBM</div>
          </div>
          <div className="sm:text-6xl text-3xl font-semibold">
            Sri Lanka’s first ever {'\n'} University based {'\n'} FOSS Community
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, ea consequuntur expedita quo non placeat asperiores
            numquam perferendis ad tenetur facere sapiente quaerat corrupti
            obcaecati nisi odit, suscipit velit adipisci.
          </div>
          <div>
            <Button>Keep in Touch with us</Button>
          </div>
        </div>
        <div className="flex-1">
          <Image src={FOSS_Pictures} alt="image"></Image>
        </div>
      </div>
    </Containerf>
  )
}

export default foss
