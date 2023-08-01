import {Kontak} from "@/types"

interface KontakProps {
    data: Kontak[];
  }
  
  const Kontak: React.FC<KontakProps> = ({
    data
  }) => {
    
    return ( 
      <>
        
          {data.map((dat)=> (
            <ul className="flex justify-between ">
                <li className="font-semibold text-xl mt-7 px-9 basis-1/2">
                  <h1 className="font-bold text-2xl" suppressHydrationWarning >Alamat</h1>
                  {dat.alamat}
                </li>
                <li className="font-semibold text-xl mt-7 px-9 basis-1/2 text-end">
                  <h1 className="font-bold text-2xl" suppressHydrationWarning >Nomor Handphone</h1>
                  {dat.hp}
                </li>
            </ul>
          ))
          }
        
        
      </>
     )
  }
  
  export default Kontak