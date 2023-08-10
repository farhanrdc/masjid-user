import {Visi} from "@/types"

interface VisiProps {
    data: Visi;
  }
  
  const Visi: React.FC<VisiProps> = ({
    data
  }) => {
    
    return ( 
      <div>
        <h1 className="text-3xl font-bold text-center mt-10">Visi dan Misi</h1> 
        
        <h2 className="font-semibold text-xl mt-8 px-9">Visi Masjid Al Mujahidin</h2>
        <p className="font-light text-xl mt-2 px-9">{data.visiDb}</p>
      </div>
      
     )
  }
  
  export default Visi