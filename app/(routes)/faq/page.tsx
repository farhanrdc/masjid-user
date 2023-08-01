import Container from '@/components/ui/container'
import Faq from '@/components/faq';
import getFaq from '@/actions/get-faq';

export const revalidate = 0

const FaqPage = async () => {
  const faq = await getFaq();
  return (
    <Container>
      <div className="pt-10 pb-20 mx-4 bg-white">
        <Faq data={faq}/>
      </div>
    </Container> 
  )
}

export default FaqPage