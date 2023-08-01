"use client"

import {Artikel} from "@/types"
import Image from "next/image";
import React from "react";
import IconButton from "./icon-button";
import { Expand} from "lucide-react";
import { useRouter } from "next/navigation";

interface ArtikelCardProps {
    datas: Artikel;
  }

const ArtikelCard: React.FC<ArtikelCardProps> = ({
    datas
  }) => {

    const router = useRouter()
    const handleClick = () => {
        router.push(`/artikel/${datas?.id}`)
    }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        {/* Image dan Action */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image 
            src={datas.imageUrl} 
            alt="Image" 
            fill
            className="aspect-square object-cover rounded-md"
            />

            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                    <IconButton 
                    onClick={() => {}} 
                    icon={<Expand size={20} className="text-gray-600" />}
                    />
                </div>
            </div>
        </div>

        {/* Description */}
      <div>
        <p className="font-semibold text-xl mb-3">{datas.label}</p>
        <p className="text-sm text-gray-500 mb">{datas.sumber}</p>
        <p className="text-sm text-gray-500 mb-3">Dibuat pada: {new Date(datas.createdAt).toLocaleString()}</p>
        <p className="font-light text-lg text-left">{datas.teksArtikel.slice(0, 120)}<b>...</b></p>
      </div>

    </div>
  )
}

export default ArtikelCard