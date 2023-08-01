"use client"

import Container from "./ui/container"
import { MainNav } from "./main-nav"

import { cn } from "@/lib/utils";
import Header from "./header";
import useScrollPercentage from "./scroll";

const Navbar = () => {
  const scrollPercentage = useScrollPercentage();
  const isNavbarFixed = scrollPercentage >= 28
  return (
    <>
    <Header />
    
    <Container>
        <div className={cn('relative left-0 right-0 w-full  sm:px-6 lg:px-8 flex h-16 items-center', isNavbarFixed ? 'navbar-fixed  justify-between transition-opacity duration-700 ease-in' : '') }>  
          
          <MainNav />
        </div>
    </Container>
    </>
  )
}

export default Navbar
// mx-auto max-w-6xl