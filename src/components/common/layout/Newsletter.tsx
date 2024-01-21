import React from 'react'
import Containerf from '../containerf'
import Nesletter from '/public/images/nesletter.svg'
import Image from 'next/image'
import Searchq from './search'

const Newsletter = () => {
  return (
    <>
      <div className="  pt-20 " id="bge">
        <Containerf>
          <div className=" flex max-xl:flex-col  h-max pb-11">
            <div className="   text-gray-0 max-xl:pl-28  max-xl:pr-0 pr-28  w-auto h-max ">
              <div className="text-[36px] font-medium w-full">
                Sign up for our newsletter!{' '}
              </div>
              <div className="  text-[18px] w-full">
                Get notified about updates and be the first to get early access
                to new episodes.
              </div>
            </div>

            <div className="flex max-w-max pr-10 max-xl:pl-28 max-xl:pt-11">
              <Searchq />
            </div>
          </div>
        </Containerf>
      </div>
    </>
  )
}

export default Newsletter
