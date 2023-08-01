"use client"

import {Agenda} from "@/types"
import React from "react";
import { useRouter } from "next/navigation";

interface AgendaCardProps {
    datas: Agenda;
  }

const AgendaCard: React.FC<AgendaCardProps> = ({
    datas
  }) => {

    const router = useRouter()
    const handleClick = () => {
        router.push(`/agenda/${datas?.id}`)
    }

  return (
    <div className="flex flex-row justify-center bg-white rounded-xl border p-9 space-y-4">
        {/* Image dan Action */}
        <div className="basis-1/2 aspect-square rounded-xl relative">
            <img src={datas.imageUrl} alt="" className="rounded-xl bg-cover hover:scale-105 transition"/>

            <div className="opacity-0 hover:opacity-100 transition absolute w-full px-6 bottom-5">
                
            </div>
        </div>

        {/* Description */}
        <div className="basis-1/2 ml-12">
          <h1 className="font-semibold text-2xl mb-3 ">{datas.label}</h1>
          <p className="font-light text-lg">{datas.teksAgenda.slice(0, 100)}<b>...</b></p>
          <button
        className="mt-10 -mb-10 px-9  bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg"
        onClick={handleClick}
        >
        Read More
        </button>
        </div>

    </div>
  )
}

export default AgendaCard