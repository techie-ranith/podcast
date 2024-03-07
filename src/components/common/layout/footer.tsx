import React from 'react'
import Image from 'next/image'
import Containerf from './containerf'

import logo from '/public/images/footer_icons/logo.png'
import logo2 from '/public/images/footer_icons/foss_logo.png'
import github from '/public/images/footer_icons/mdi_github.png'
import linkedin from '/public/images/footer_icons/ri_linkedin-fill.png'
import insta from '/public/images/footer_icons/ri_instagram-fill.png'
import facebook from '/public/images/footer_icons/uil_facebook.png'
import x from '/public/images/footer_icons/mdi_twitter.png'
import youtube from '/public/images/footer_icons/mdi_youtube.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Containerf>
      <div className="flex flex-col sm:flex-row items-center justify-center p-6 font-inter gap-16">
        <div className="flex flex-col justify-center sm:items-start items-center gap-4 flex-1">
          <div className="flex flex-col items-center justify-center">
            <Image src={logo} alt="balck logo"></Image>
          </div>
          <div className="sm:w-2/3 sm:text-left text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
            est leo. Nulla fermentum ultrices ullamcorper.
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center gap-4">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">Episodes</a>
          </div>
          <div>
            <a href="">About</a>
          </div>
        </div>
        <div className="flex flex-col flex-1 sm:items-end items-center justify-center gap-4">
          <div>
            <Image src={logo2} alt="foss_logo"></Image>
          </div>
          <div>Follow us on</div>
          <div className="flex gap-2">
            <div>
              <Image src={github} alt="social_icons"></Image>
            </div>
            <div>
              <Image src={linkedin} alt="social_icons"></Image>
            </div>
            <div>
              <Image src={insta} alt="social_icons"></Image>
            </div>
            <div>
              <Image src={facebook} alt="social_icons"></Image>
            </div>
            <div>
              <Image src={x} alt="social_icons"></Image>
            </div>
            <div>
              <Image src={youtube} alt="social_icons"></Image>
            </div>
          </div>
        </div>
      </div>
    </Containerf>
  )
}

export default Footer
