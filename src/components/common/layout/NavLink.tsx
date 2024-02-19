'use client'
import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-gray-600 sm:text-xl rounded md:p-0 hover:text-blue-400 hover:font-bold"
    >
      {title}
    </Link>
  )
}

export default NavLink
