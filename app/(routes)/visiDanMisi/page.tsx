import getMisi from '@/actions/get-misi';
import getVisi from '@/actions/get-visi';

import Container from '@/components/ui/container'
import Visi from '@/components/visi';
import Misi from '@/components/misi';

export const revalidate = 0

const ProfilVisiMisi = async () => {
  const visi = await getVisi("01a575da-bae6-42fe-bfa5-9e505fbd737a")
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