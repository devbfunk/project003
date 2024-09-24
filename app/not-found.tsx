import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col w-full items-center justify-center gap-4 p-48'>
            <h1>PAGE NOT FOUND 404 </h1>
            <Link href="/" className='flex items-center justify-center gap-2'><ArrowLeftIcon /> Back Home </Link>
        </div>
    )
}
