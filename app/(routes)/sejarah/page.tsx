import Container from "@/components/ui/container"
import Sejarah from '@/components/sejarah';
import getSejarah from "@/actions/get-sejarah";


export const revalidate = 0

const SejarahPage = async () => {
  const pembangunan = await getSejarah("72b8af2f-8334-4a07-ab77-60e496258eee")
  const renovasi = await getSejarah("e0575112-bfb5-483f-a089-e4b3ec0b0542")

  return (
    <div className='pb-10 '>
      <Container>
        
          <h1 className="text-3xl font-bold text-center mt-10 -mb-10">Sejarah</h1> 
          <Sejarah data={pembangunan}/>
          <Sejarah data={renovasi}/>
      </Container> 
    </div>
      
    
  )
}

export default SejarahPage