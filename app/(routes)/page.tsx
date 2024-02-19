import getWallpaper from '@/actions/get-wallpaper';
import Container from '@/components/ui/container'
import Wallpaper from '@/components/wallpaper';
import Image from 'next/image';

export const revalidate = 0

const HomePage = async () => {
  
  return (
   <Container>
      <div className=" flex justify-center items-center space-y-10 pb-5">
        <Image 
              src='/masjid.jpg'
                alt="Image" 
                width={700}
                height={500}
                className='hover:grayscale rounded-2xl transition'
        />
      </div>
      <h1 className='judul mb-20'>Selamat Datang di Website Masjid Al Mujahidin</h1>
   </Container> 
  )
}

export default HomePage