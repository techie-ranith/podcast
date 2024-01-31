'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '../buttons'
import Link from 'next/link'
import logo from '/public/images/footer_icons/logo.png'
import x from '/public/images/Vector.png'
import logo2 from '/public/images/footer_icons/foss_colored_logo.png'

type Props = {}

const Navigation = (props: Props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const isTop = scrollTop < 100
      if (isTop !== isScrolled) {
        setIsScrolled(isTop)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div
      className={`flex items-center justify-between w-full pt-2 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-8">
        <div>
          <Image src={logo} alt="images" />
        </div>
        <div>
          <Image src={x} alt="images" />
        </div>
        <div>
          <Image src={logo2} alt="images" />
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </div>

      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 right-0 bg-white p-4 shadow-md text-center`}
      >
        <div className="flex flex-col gap-4">
          <div className="mb-2">Home</div> <div className="mb-2">Episodes</div>{' '}
          <div>About</div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-10">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/episodes">Episodes</Link>
        </div>
        <div>
          <Link href="/favorites">Favorites</Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-end">
        <Button variant={'black-outline'} size={'default'}>
          Subscribe
        </Button>
      </div>
    </div>
  )
}

export default Navigation
