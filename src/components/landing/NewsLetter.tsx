import React from 'react'
import Containerf from '@/components/client/containerf'
import { Button } from 'components/common/buttons/'
import { Input } from '../common/ui/input'

const NewsLetter = () => {
  return (
    <div className="" id="bge">
      <Containerf>
        <div className="p-12 ">
          <div className="flex w-full sm:flex-row flex-col items-center justify-center my-10">
            <div className="flex flex-1 w-full flex-col items-start justify-center gap-4">
              <div className="text-5xl font-semibold text-white-0">
                Sign up for our newsletter!{''}
              </div>
              <div className=" whitespace-pre-line text-white-0 text-left">
                Get notified about updates and be the first to get early access{' '}
                {'\n'}
                to new episodes.
              </div>
            </div>
            <div className="flex flex-col m-4 sm:flex-row items-center justify-center flex-1 gap-2 w-full">
              <input
                type="text"
                placeholder="Enter Email"
                className="border-0 rounded-lg h-12 w-full text-center"
              />
              <Button variant={'black'}>Subscribe</Button>
            </div>
          </div>
        </div>
      </Containerf>
    </div>
  )
}

export default NewsLetter
