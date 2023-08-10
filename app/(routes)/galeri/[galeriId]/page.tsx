import getGaleriDetail from '@/actions/get-galeri-detail';
import Galery from '@/components/galeri';
import BackButton from '@/components/ui/back';
import Container from '@/components/ui/container';


export const revalidate = 0;

interface GaleriDetailProps {
  params: {
    galeriId: string;
  },
}

const GaleriDetail: React.FC<GaleriDetailProps> = async ({ 
    params
}) => {
  
    const galeri = await getGaleriDetail(params.galeriId);
    
    if (!galeri) {
      return null;
    }
    
  return (
    <Container>
        <BackButton />
        
          <div className='mb-10'>
            <h1 className="judul mb-10">{galeri.label}</h1> 
            
            {/* Galeri */}
            <div className="px-4 py-10 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-1 lg:items-start lg:content-center lg:gap-x-8">
                <Galery images={galeri.images} />
              </div>

            </div>
              
            {/* Map through each paragraph in the galeri */}
            {galeri.teksAgenda.split('\n').map((paragraph, index) => (
              
                <p key={index} className='font-medium text-lg text-justify px-9 mb-5'>{paragraph}</p>
            ))}
            </div>
        
    </Container>
  )
}

export default GaleriDetail