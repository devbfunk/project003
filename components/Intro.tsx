import Image from 'next/image'
import React from 'react'
import authorImage from '@/app/authorimage.jpg'
import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function Intro() {
    return (
        <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center">
            <div className="mt-2 flex-1 md:mt-0">
                <h1 className="title no-underline">Hey, I &#39;m Brandon.</h1>
                <p className="mt-3 font-light text-muted-foreground">
                    I&#39;m a junior web developer based in Hudsonville, Michigan. I&#39;m passionate about learning new technologies and sharing knowledge with others.
                </p>
                <div className="flex justify-end">
                    <Link href="/bio" className='flex gap-2 items-center justify-center mt-4 border border-gray-600  w-[150px] rounded-lg py-2 px-2 text-sm'>Learn more <ArrowRightIcon size={18} />
                    </Link>
                </div>
            </div>
            <div className="relative">
                <Image
                    className='flex-1 rounded-lg grayscale'
                    src={authorImage}
                    alt="Brandon Funk"
                    width={175}
                    height={175}
                    priority
                />
            </div>
        </section>
    )
}
