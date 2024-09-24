"use client"
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import { HiXMark } from 'react-icons/hi2';

export default function MobileMenu({ open, setOpen }) {
    const handleToggle = () => {
        setOpen((prev: any) => !prev);
    };

    return (
        <div className='relative'>
            {!open ? (<HamburgerMenuIcon className='h-10 w-10 text-black dark:text-white cursor-pointer' onClick={handleToggle} />) : (<HiXMark className='h-10 w-10 text-black dark:text-white cursor-pointer ' onClick={handleToggle} />)}
            {open && (
                <ul className="absolute top-12 right-0 flex flex-col text-end gap-6 text-sm font-light text-muted-foreground bg-neutral-300 dark:bg-neutral-800 p-4 w-[100px] rounded-lg">
                    <li className="transition-colors hover:text-foreground">
                        <Link href="/posts" onClick={() => setOpen(false)}>Posts</Link>
                    </li>
                    <li className="transition-colors hover:text-foreground">
                        <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
                    </li>
                    <li className="transition-colors hover:text-foreground">
                        <Link href="/resume" onClick={() => setOpen(false)}>Resume</Link>
                    </li>
                    <li className="transition-colors hover:text-foreground">
                        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
                    </li>
                </ul>
            )}
        </div>
    );
}
