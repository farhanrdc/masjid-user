import getMisi from '@/actions/get-misi';
import getVisi from '@/actions/get-visi';

import Container from '@/components/ui/container'
import Visi from '@/components/visi';
import Misi from '@/components/misi';

export const revalidate = 0

const ProfilVisiMisi = async () => {
  const visi = await getVisi("30fb3523-6385-4c11-b6d8-f35d2e40b1ca")
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