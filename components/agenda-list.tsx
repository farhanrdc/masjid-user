import {Agenda} from "@/types"

import AgendaCard from "./ui/agenda-card";
import NoResult from "./ui/no-result";

interface AgendaListProps {
    datas: Agenda[];
  }
  
  const AgendaList: React.FC<AgendaListProps> = ({
    datas
  }) => {
    return(
        <div className="space-y-4">
            <h1 className="judul mb-14">Agenda</h1> 
            {datas.length === 0 && <NoResult />}
            <div className=" px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                {datas.map((data) => (
                <AgendaCard key={data.id} datas={data} />
                ))}
            </div>
        </div>
    )
  }

  export default AgendaList