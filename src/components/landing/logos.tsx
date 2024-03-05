import React from 'react'
import Containerf from '@/components/client/containerf'

import DevLab from '/public/images/DevLab.png'
import OWASP from '/public/images/OWASP.png'
import DevOps from '/public/images/DevOps.png'
import Mozilla from '/public/images/Mozilla.png'
import FOSS_Logo_4 from '/public/images/FOSS Logo 4.png'
import WIF from '/public/images/WIF.png'
import Devoke from '/public/images/Devoke.png'
import Crowdsource from '/public/images/Crowdsource.png'
import Image from 'next/image'

const Brand = () => {
  const images = [
    DevLab,
    OWASP,
    DevOps,
    Mozilla,
    FOSS_Logo_4,
    WIF,
    Devoke,
    Crowdsource,
  ]
  return (
    <Containerf>
      <div className="flex justify-between items-center sm:flex-row flex-col my-20 sm:gap-0 gap-12">
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index}`}></Image>
        ))}
      </div>
    </Containerf>
  )
}

export default Brand
