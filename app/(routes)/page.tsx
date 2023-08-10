import getWallpaper from '@/actions/get-wallpaper';
import Container from '@/components/ui/container'
import Wallpaper from '@/components/wallpaper';

export const revalidate = 0

const HomePage = async () => {
  const wallpaper = await getWallpaper("e2512e7b-1904-4a81-a2b8-a9c0196425cb")
  return (
   <Container>
      <div className="-mt-8 space-y-10 pb-5">
        <Wallpaper data={wallpaper}/>
      </div>
      <h1 className='judul mb-20'>Selamat Datang di Website Masjid Al Mujahidin</h1>
   </Container> 
  )
}

export default HomePage