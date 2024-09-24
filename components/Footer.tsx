import React from 'react'
import { SiFacebook, SiLinkedin } from 'react-icons/si'
import { SlSocialTwitter } from 'react-icons/sl'

const navigation = [
    {
        name: "Facebook",
        href: "https://facebook.com",
        icon: <SiFacebook />,
    },
    {
        name: "Github",
        href: "https://facebook.com",
        icon: <SlSocialTwitter />,
    },
    {
        name: "LinkedIn",
        href: "https://facebook.com",
        icon: <SiLinkedin />,
    },
]



export default function Footer() {
    return (
        <footer className="py-8">
            <div className="container max-w-3xl">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center space-x-6 md:order-2">
                        {navigation.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className='text-muted-foreground hover:text-foreground'>
                                <span className="sr-only">{item.name}</span>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-xs leading-5 text-muted-foreground">
                            &copy; {new Date().getFullYear()} RunCMDCreate. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
