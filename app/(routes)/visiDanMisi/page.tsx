import getMisi from '@/actions/get-misi';
// import getVisi from '@/actions/get-visi';

import Container from '@/components/ui/container'
import Visi from '@/components/visi';
import Misi from '@/components/misi';

export const revalidate = 0

const ProfilVisiMisi = async () => {
  const misi = await getMisi()
  return (
   <div className='pb-10'>
    <Container>
        
          <Visi />
          <Misi data={misi}/>

    </Container> 
   </div>
  )
}

export default ProfilVisiMisi