'use client'
import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Button from 'components/common/buttons/primary'
import Image from 'next/image'
import dialectic_logo from '/public/images/footer_icons/logo.png'
import x from '/public/images/footer_icons/x.png'
import foss_logo from '/public/images/footer_icons/foss_logo.png'
import Containerf from '../../client/containerf'

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Episodes', path: '/episodes' },
  { title: 'Favorites', path: '/favorites' },
]

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [windowScrolled, setWindowScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setWindowScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Containerf>
      <nav
        className={
          windowScrolled
            ? ' fixed mx-auto top-0 left-0 right-0 z-10 bg-white-0'
            : ' mx-auto top-0 left-0 right-0 z-10 bg-white-0'
        }
      >
        <div className="container flex items-center justify-between px-4 py-2 mx-auto lg:py-4">
          <div className="flex items-center justify-center gap-6">
            <Image
              src={dialectic_logo}
              alt="Your Logo"
              className="transition-all duration-300 ease-in-out"
            />
            <Image
              src={x}
              alt="Your Logo"
              className="transition-all duration-300 ease-in-out"
            />
            <Image
              src={foss_logo}
              alt="Your Logo"
              className="transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="hidden menu md:block md:w-auto" id="navbar">
            <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8 font-semibold">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button className="sm:block hidden" variant={'black-outline'}>
              Subscribe
            </Button>
          </div>
          <div className="block mobile-menu md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white-0"
              >
                <Bars3Icon className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white-0"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    </Containerf>
  )
}

export default Navigation
