import {Jumat} from "@/types"

interface JumatProps {
    data: Jumat[];
  }
  
  const Jumat: React.FC<JumatProps> = ({
    data
  }) => {
    
    return ( 
        <div className="flex flex-col-reverse">
           {data.map((dat)=> (
            <img src={dat.imageUrl} alt="" className="rounded-xl bg-cover"/>
          ))
          }
        </div>        

     )
  }
  
  export default Jumat