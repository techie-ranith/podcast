import React from 'react'
import Containerf from '@/components/common/containerf'
import Nesletter from '/public/images/nesletter.svg'
import Image from 'next/image'
import { Search } from 'components/common/layout/'
import { Button } from 'components/common/buttons/'
import { Input } from '../common/ui/input'

const NewsLetter = () => {
  return (
    <div className="" id="bge">
      <Containerf>
        <div className="flex sm:flex-row flex-col items-center justify-center">
          <div className="flex flex-1 max-w-full flex-col items-start justify-center gap-4">
            <div className="text-5xl font-semibold text-white-0">
              Sign up for our newsletter!{''}
            </div>
            <div className=" whitespace-pre-line text-white-0 text-left">
              Get notified about updates and be the first to get early access{' '}
              {'\n'}
              to new episodes.
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <Input type="text" className="border-0 rounded-md">
              <Button variant={'black'}>Subscribe</Button>
            </Input>
          </div>
        </div>
      </Containerf>
    </div>
  )
}

export default NewsLetter
