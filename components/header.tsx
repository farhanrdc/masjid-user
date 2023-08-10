import Image from "next/image"
import Link from "next/link"
import Container from "./ui/container"

const Header = () => {
  return (
    <Container>
        <header className="sticky top-0 mx-6 border-b flex justify-between items-center h-[6.5rem] translate-x-0 translate-y-calc(-1% * (max(scroll-0, 25) - 25) * 100 / 75)">
            <Link href='/'>
                <Image  
                    src='/logo.jpg'
                    alt='logo'
                    width={100}
                    height={100}
                />

            </Link>
            <h1 className='text-3xl'>Masjid Al Mujahidin</h1>
            
            {/* Icon Youtube */}
            <a href="https://www.youtube.com/@InfoMenarikPenting" target="_blank"
            className="w-12 h-12 rounded-full mr-3 flex justify-center items-center border border-slate-300 hover:border-slate-100 hover:bg-white hover:text-black">
                <svg role="img" width="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                className="fill-current" fill="#fff">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            </a>
        </header>
    </Container>
  )
}

export default Header