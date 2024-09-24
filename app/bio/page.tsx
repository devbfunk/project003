import Image from 'next/image'
import React from 'react'

export default function Bio() {
    return (
        <section className="pb-24 pt-40">
            <div className="container max-w-3xl">
                <h1 className="title mb-12">Biography</h1>
                <div className="">
                    <Image src="/images/me3.jpg" alt="profile picture" height={150} width={150} className='rounded-lg float-left mx-4' />
                    <p className='mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias perferendis laboriosam quisquam quasi? Expedita vel eveniet voluptates sint sed cumque, modi nam minus officiis ex?</p>
                    <Image src="/images/me4.jpg" alt="profile picture" height={150} width={150} className='rounded-lg float-right mx-4' />
                    <p>Lorem ipsum, dolor sit amet coe saepe aliquid, modi naoe saepe aliquid, modi nam minus officiis ex?</p></div>
                <div className="mt-6">
                    <h2 className='title mb-4'>Quick Facts</h2>
                    <ul>
                        <li>-Stuff</li>
                        <li>-Stuff</li>
                        <li>-Stuff</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
