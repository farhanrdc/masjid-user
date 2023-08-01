import {Sejarah} from "@/types"

interface SejarahProps {
    data: Sejarah;
  }
  
const Sejarah: React.FC<SejarahProps> = ({
    data
  }) => {
    const paragrafSatu = data.teksSejarah.substring(0, data.teksSejarah.length / 2)
    const paragrafDua = data.teksSejarah.substring(data.teksSejarah.length / 2)
    return ( 
      <>
        
        <article className="flex flex-col justify-center mt-10 mb-10">
          <h1 className="text-3xl font-bold text-center mt-10">{data.label}</h1> 
          <p className="font-medium text-lg mt-8 mb-8 text-justify px-9">{paragrafSatu}</p>
          <img src={data.imageUrl} alt="Gambar masjid Al Mujahidin" className="mt-8 rounded-full  px-9 bg-cover grayscale hover:grayscale-0 transition"/>
          <p className="font-medium text-lg mt-10 text-justify px-9">{paragrafDua}</p>
        </article>
        
        
      </>
     )
  }
  
  export default Sejarah