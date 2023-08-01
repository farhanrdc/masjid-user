
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";

import { Image as ImageType } from "@/types";

interface GaleryTabProps {
    image: ImageType;
  }
  
  const GaleryTab: React.FC<GaleryTabProps> = ({
    image
  }) => {
    return ( 
      <Tab
        className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
      >
        {({ selected }) => (
          <div>
            <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
              <Image 
                fill 
                src={image.url} 
                alt="" 
                className="object-cover object-center" 
              />
            </span>
            <span
              className={cn(
                'absolute inset-0 rounded-md ring-8 ring-offset-4',
                selected ? 'ring-black' : 'ring-transparent',
              )}
            />
          </div>
        )}
      </Tab>
    );
  }
   
  export default GaleryTab;