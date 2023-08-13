import getMisi from '@/actions/get-misi';
import getVisi from '@/actions/get-visi';

import Container from '@/components/ui/container'
import Visi from '@/components/visi';
import Misi from '@/components/misi';

export const revalidate = 0

const ProfilVisiMisi = async () => {
  const visi = await getVisi("ff6151a1-61e2-4f0e-8520-e5875fa9fa22")
  const misi = await getMisi()
  return (
   <div className='pb-10'>
    <Container>
        
          <Visi data={visi}/>
          <Misi data={misi}/>

    </Container> 
   </div>
  )
}

export default ProfilVisiMisi