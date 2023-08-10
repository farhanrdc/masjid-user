import Container from "@/components/ui/container"
import Sejarah from '@/components/sejarah';
import getSejarah from "@/actions/get-sejarah";


export const revalidate = 0

const SejarahPage = async () => {
  const pembangunan = await getSejarah("1a06e698-a497-4a3e-b34f-3960e24a6b6e")
  const renovasi = await getSejarah("d478d1c6-1b46-4d7e-a79a-6474833d26bd")

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