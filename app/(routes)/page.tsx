import getWallpaper from '@/actions/get-wallpaper';
import Container from '@/components/ui/container'
import Wallpaper from '@/components/wallpaper';

export const revalidate = 0

const HomePage = async () => {
  const wallpaper = await getWallpaper("d7d718ff-433a-4387-98a1-7fd474cc1eb1");
  return (
   <Container>
      <div className="-mt-8 space-y-10 pb-10">
        <Wallpaper data={wallpaper}/>
      </div>
   </Container> 
  )
}

export default HomePage