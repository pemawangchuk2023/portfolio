"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { navbarLinks } from '@/constants'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed mx-auto border border-[#33533F] top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={150}
                        height={150}
                        className="rounded-full"
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    <Button onClick={() => setOpen(!open)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                        {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5"/>}
                    </Button>
                </div>
                <div className={`menu ${open ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
                    <ul className="flex flex-col md:flex-row p-4 md:p-0 md:space-x-8 mt-4 md:mt-0">
                        {navbarLinks.map((link) => (
                            <li key={link.title}>
                                <Link href={link.path}>
                                    <p className="text-white text-2xl hover:text-gray-200">{link.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
