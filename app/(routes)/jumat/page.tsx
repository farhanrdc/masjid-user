import getJumat from '@/actions/get-jumat';
import Container from '@/components/ui/container'
import Jumat from '@/components/jumat';

export const revalidate = 0

const JumatPage = async () => {
  const jumat = await getJumat();
  return (
   <Container>
      <div className="pb-10">
        <Jumat data={jumat}/>
      </div>
   </Container> 
  )
}

export default JumatPage