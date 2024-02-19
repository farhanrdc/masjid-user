import Container from "@/components/ui/container"
import Sejarah from '@/components/sejarah';
import getSejarah from "@/actions/get-sejarah";


export const revalidate = 0

const SejarahPage = async () => {
  const pembangunan = await getSejarah("5cd3b622-6afe-4f2a-b544-4764ac535b12")
  const renovasi = await getSejarah("2c8e84e6-fe63-4f19-afe1-0c45709fa19d")

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