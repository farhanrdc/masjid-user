import {Artikel} from "@/types"

import ArtikelCard from "./ui/artikel-card";
import NoResult from "./ui/no-result";

interface ArtikelListProps {
    datas: Artikel[];
  }
  
  const ArtikelList: React.FC<ArtikelListProps> = ({
    datas
  }) => {
    return(
        <div className="space-y-4">
            <h1 className="judul mb-10">Artikel</h1> 
            {datas.length === 0 && <NoResult />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {datas.map((data) => (
                <ArtikelCard key={data.id} datas={data} />
                ))}
            </div>
        </div>
    )
  }

  export default ArtikelList