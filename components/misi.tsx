import {Misi} from "@/types"

interface MisiProps {
    data: Misi[];
  }
  
  const Misi: React.FC<MisiProps> = ({
    data
  }) => {
    
    return ( 
      <div>
        <h2 className="font-semibold text-xl px-9 mt-10">Misi Masjid Al Mujahidin</h2> 
        <ul className="flex flex-col">
          {data.map((dat)=> (
            <li className="font-light text-xl mt-2 px-9" key={dat.id}>{dat.misiDb}</li>
          ))
          }
        </ul>  
      </div>
     )
  }
  
  export default Misi