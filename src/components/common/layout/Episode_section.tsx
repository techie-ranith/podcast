import React from 'react'
import Containerf from '@/components/common/containerf'
import Searchq from '@/components/common/layout/search'
import Episodecard from '@/components/common/layout/Episode_card'
import { Button } from '@mui/material'
import { episodes } from '@/data/metadata'

type Props = {}

const EpisodeSection = (props: Props) => {
  return (
    <div className="bg-gray-900">
      <div className=" pt-32 ">
        <Containerf>
          <div className="w-full pb-36">
            <div className=" text-[64px] float-left text-gray-0 ">
              All Episodes
            </div>

            <div className=" float-right p-9 justify-center">
              <Button variant="outlined">Show All Episode</Button>
            </div>
          </div>
        </Containerf>

        <Containerf>
          <Episodecard />
          <Episodecard />
          <Episodecard />
          <Episodecard />
        </Containerf>

        <Containerf>
          <div className="w-full flex justify-center items-center  pt-24 pb-20">
            <Button variant="outlined">View More</Button>
          </div>
        </Containerf>
      </div>
    </div>
  )
}

export default EpisodeSection
