import {Pengurus} from "@/types"

import PengurusCard from "./ui/pengurus-card";
import NoResult from "./ui/no-result";

interface PengurusListProps {
    datas: Pengurus[];
  }
  
  const PengurusList: React.FC<PengurusListProps> = ({
    datas
  }) => {
    return(
        <div className="space-y-4 flex flex-col items-center">
             <h1 className="judul mt-10">Struktur Organisasi</h1> 
             <h2 className="text-2xl font-bold mb-10 mt-8 text-center">Pengurus Masjid Al Mujahidin</h2> 
            {datas.length === 0 && <NoResult />}
            
              <div className="flex flex-col-reverse">
                  {datas.map((data) => (
                  <PengurusCard key={data.id} datas={data} />
                  ))}
              </div>
            
        </div>
    )
  }

  export default PengurusList