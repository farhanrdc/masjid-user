import {Kontak} from "@/types"

interface KontakProps {
    data: Kontak[];
  }
  
  const Kontak: React.FC<KontakProps> = ({
    data
  }) => {
    
    return ( 
      <div>
        
          {data.map((dat)=> (
            <ul className="flex justify-between " key={dat.id}>
                <li className="font-semibold text-xl mt-7 px-9 basis-1/3 justify-self-center" suppressHydrationWarning >
                  <h1 className="font-bold text-2xl">Alamat</h1>
                  {dat.alamat}
                </li>
                <li className="font-semibold text-xl mt-7 pl-9 basis-1/3 justify-self-center" suppressHydrationWarning >
                  <h1 className="font-bold text-2xl text-center">Email</h1>
                  <p className="text-end w-10/12"> {dat.email}</p>
                </li>
                <li className="font-semibold text-xl mt-7 px-9 basis-1/3 text-center justify-self-center" suppressHydrationWarning >
                  <h1 className="font-bold text-2xl">Nomor Handphone</h1>
                  <p className="text-end w-10/12"> {dat.hp}</p>
                </li>
            </ul>
          ))
          }
      </div>
     )
  }
  
  export default Kontak