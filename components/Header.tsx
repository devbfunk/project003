"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ThemeToggle from './theme-toggle';
import MobileMenu from './MobileMenu';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
            <nav className='container flex max-w-3xl items-center justify-between'>
                <div>
                    <Link href='/' className='font-serif text-2xl font-bold'>
                        RunCMDCreate
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex items-center gap-6 text-sm font-light text-muted-foreground ${open ? "block" : "hidden"}`}>
                    <li className="transition-colors hover:text-foreground">
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li className="transition-colors hover:text-foreground">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="transition-colors hover:text-foreground">
                        <Link href="/resume">Resume</Link>
                    </li>
                    <li className="transition-colors hover:text-foreground">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                {/* Mobile Menu */}

                <div>
                    <ThemeToggle />
                </div>
                <div className="flex md:hidden">
                    <MobileMenu open={open} setOpen={setOpen} />
                </div>
            </nav>
        </header>
    );
}
