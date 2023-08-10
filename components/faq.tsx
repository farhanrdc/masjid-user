import {Faq} from "@/types"

interface FaqProps {
    data: Faq[];
  }
  
  const Faq: React.FC<FaqProps> = ({
    data
  }) => {
    
    return ( 
      <div>
        <h1 className="judul">Frequently Asked Question (FAQ)</h1> 
        <div className="flex flex-col px-9 mt-4">
          {data.map((dat)=> (
            <dl className="mt-10">
              <hr className="border-t-2 mb-8"/>
              <dt className="font-semibold text-xl mt-2 ">{dat.tanya}</dt>
              <dd className="font-normal text-xl mt-2 ">{dat.jawab}</dd>
              
            </dl>
          ))
          }
        </div>
      </div>
      
     )
  }
  
  export default Faq