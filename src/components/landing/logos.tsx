import React from 'react'
import { Container } from '../common'

import DevLab from '/public/images/DevLab.png'
import OWASP from '/public/images/OWASP.png'
import DevOps from '/public/images/DevOps.png'
import Mozilla from '/public/images/Mozilla.png'
import FOSS_Logo_4 from '/public/images/FOSS Logo 4.png'
import WIF from '/public/images/WIF.png'
import Devoke from '/public/images/Devoke.png'
import Crowdsource from '/public/images/Crowdsource.png'

const Brand = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center lg:flex-row xs:flex-col">
        <div className=" flex justify-center items-center">
          <img src={DevLab.src} alt="DevLab" />
        </div>
        <div className="pl-8 m-8 flex justify-center items-center">
          <img src={OWASP.src} alt="OWASP" />
        </div>
        <div className=" m-8 flex justify-center items-center">
          <img src={DevOps.src} alt="DevOps" />
        </div>
        <div className=" m-8 flex justify-center items-center">
          <img src={Mozilla.src} alt="Mozilla" />
        </div>
        <div className=" m-8 flex justify-center items-center">
          <img src={FOSS_Logo_4.src} alt="FOSS_Logo_4" />
        </div>
        <div className=" m-8 flex justify-center items-center">
          <img src={WIF.src} alt="WIF" />
        </div>
        <div className="pr-8 m-8 flex justify-center items-center">
          <img src={Devoke.src} alt="Devoke" />
        </div>
        <div className="flex justify-center items-center">
          <img src={Crowdsource.src} alt="Crowdsource" />
        </div>
      </div>
    </>
  )
}

export default Brand
