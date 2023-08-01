"use client"

import {Galeri} from "@/types"
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconButton from "./icon-button";
import { Expand} from "lucide-react";


interface GaleriCardProps {
    datas: Galeri;
  }

const GaleriCard: React.FC<GaleriCardProps> = ({
    datas
  }) => {

    const router = useRouter()
    const handleClick = () => {
        router.push(`/galeri/${datas?.id}`)
    }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image dan Action */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
          <Image 
            src={datas.images?.[0]?.url} 
            alt="" 
            fill
            className="aspect-square object-cover rounded-md"
          />

          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 top-1/2">
              <div className="flex gap-x-6 justify-center">
                  <h3 className="bg-white font-bold px-5 py-2 rounded-lg">Lihat Galeri</h3>
              </div>
          </div>
      </div>

        {/* Description */}
      <div>
        <p className="font-semibold text-xl mb-3">{datas.label}</p>
        
        <p >
          {datas.teksAgenda.slice(0, 70)}<b>...</b>
        </p>
      
      
      </div>

    </div>
  )
}

export default GaleriCard