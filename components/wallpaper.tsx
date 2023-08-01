import {Wallpaper} from "@/types"

interface WallpaperProps {
    data: Wallpaper;
  }
  
  const Wallpaper: React.FC<WallpaperProps> = ({
    data
  }) => {
    
    return ( 
      <div className="sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] bg-cover grayscale hover:grayscale-0 transition">
        </div>
      </div>
     )
  }
  
  export default Wallpaper