"use client"

import {Pengurus} from "@/types"
import Image from "next/image";
import React from "react";


interface PengurusCardProps {
    datas: Pengurus;
  }

const PengurusCard: React.FC<PengurusCardProps> = ({
    datas
  }) => {


  return (
    <div className="flex flex-col w-full pt-5 bg-white hover:scale-105 transition rounded-xl border p-3 space-y-4 mb-10">
        {/* Image dan Action */}
        <div className="grid place-items-center">
            <Image 
            src={datas.imageUrl} 
            alt="Image" 
            width={200}
            height={200}
            className="aspect-square object-cover rounded-md "
            />
        </div>
        
        {/* Description */}
        <div>
            <p className="font-semibold text-xl mb-3 grid place-items-center">{datas.label}</p>
            <p className="font-light text-lg text-left grid place-items-center">{datas.jabatan}</p>
        </div>

    </div>
  )
}

export default PengurusCard