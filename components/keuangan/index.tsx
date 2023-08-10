"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import KeuanganTab from "./keuangan-tab";

interface KeuanganProps {
    images: ImageType[];
  }  

const Keuangann : React.FC<KeuanganProps> = ({
    images
  }) => {
  return (
    <Tab.Group as="div" className="flex flex-row-reverse">
      <div className="mx-9 lg:mt-20 hidden  w-full max-w-2xl sm:block lg:max-w-none basis-1/3">
        <Tab.List className=" grid grid-cols-3 gap-6 ">
          {images.map((image) => (
            <KeuanganTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-square w-full basis-2/3">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-top"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Keuangann