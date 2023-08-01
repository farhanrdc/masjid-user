import {Misi} from "@/types"

interface MisiProps {
    data: Misi[];
  }
  
  const Misi: React.FC<MisiProps> = ({
    data
  }) => {
    
    return ( 
      <>
        <h2 className="font-semibold text-xl px-9 mt-10">Misi Masjid Al Mujahidin</h2> 
        <ul className="flex flex-col-reverse">
          {data.map((dat)=> (
            <li className="font-light text-xl mt-2 px-9">{dat.misiDb}</li>
          ))
          }
        </ul>
        
        
      </>
     )
  }
  
  export default Misi