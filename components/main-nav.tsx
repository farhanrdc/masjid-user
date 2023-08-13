"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation"
import {MoonIcon} from "@heroicons/react/24/solid"

export function MainNav() {
  const pathname = usePathname();
  const params = useParams();
  
  const routes = [
    {
        id: 1,
        href: '/',
        label: 'Beranda',
        active: pathname === '/',
    },
    {
        id: 2,
        href: '',
        label: 'Profil',
        active: pathname === '/visiDanMisi' || pathname === '/sejarah',
        submenu:true,
        sublinks: [
            {
                id: 11,
                label: 'Visi dan Misi',
                href: '/visiDanMisi',
                active: pathname === '/visiDanMisi',
            },
            {
                id: 12,
                label: 'Sejarah',
                href: '/sejarah',
                active: pathname === '/sejarah',
            },
        ]
    },
    {
        id: 3,
        href: '/artikel',
        label: 'Artikel',
        active: pathname === '/artikel',
    },
    {
        id: 4,
        href: '/agenda',
        label: 'Agenda',
        active: pathname === '/agenda',
    },
    {
        id: 5,
        href: '/galeri',
        label: 'Galeri',
        active: pathname === '/galeri',
    },
    {
        id: 6,
        href: '/pengurus',
        label: 'Struktur-Organisasi',
        active: pathname === '/pengurus',
    },
    {
        id: 7,
        href: '/keuangan',
        label: 'Keuangan',
        active: pathname === '/keuangan',
    },
    {
        id: 8,
        href: '/jumat',
        label: 'Petugas-Jumat',
        active: pathname === '/jumat',
    },
    {
        id: 9,
        href: '/faq',
        label: 'FAQ',
        active: pathname === '/faq',
    },
    {
        id: 10,
        href: '/kontak',
        label: 'Kontak',
        active: pathname === '/kontak',
    },
    
  ]

    return (
      
      <nav
      className="flex justify-between relative items-center h-full w-full border-t border-b">
        <MoonIcon className="w-7 h-7 text-slate-800 "/> 
       {routes.map((route) => (
          <Link
              key={route.id}
              href={route.href}
              className={cn(
                  'border-t-4 border-b-4 border-opacity-0 border-hidden font-bold flex items-center justify-center group cursor-pointer h-full hover:text-indigo-500 hover:border-indigo-500 hover:border-opacity-100 hover:border-solid transition duration-200',
                  route.active ? "text-indigo-500 dark:text-indigo-500 border-indigo-500 border-opacity-100 border-t-4 border-b-4 border-solid"  : 'text-muted-foreground'
              )}
          >
              {route.label}
              {route.submenu && ( 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
                          
              )}

              {route.submenu && (
                <div className='z-10 absolute top-[60px] hidden group-hover:block hover:block group/item border-t-2 border-neutral-200'>
                    <div className='w-24 h-1 absolute bg-neutral-50 bg-opacity-70 backdrop-blur-sm'>
                                
                    </div>
                        {route.sublinks.map((mysublink) => (
                            <Link key={mysublink.id} 
                            href={mysublink.href} 
                            className='flex flex-col items-center justify-center bg-neutral-50 text-black 
                             px-2 font-bold hover:font-extrabold hover:bg-neutral-100 hover:text-indigo-400 transition-all duration-200'
                            > 
                                <li className='pt-2 list-none group-hover/item:visible '>
                                    {mysublink.label}
                                </li>
                            </Link>
                        ))}
                    </div>
                )
                }
          </Link>
      ))}
  </nav>
  
    )

}
