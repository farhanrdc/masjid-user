import getArtikelDetail from '@/actions/get-artikel-detail';
import BackButton from '@/components/ui/back';
import Container from '@/components/ui/container';
import Image from 'next/image';


export const revalidate = 0;

interface ArtikelDetailProps {
  params: {
    artikelId: string;
  },
}

const ArtikelDetail: React.FC<ArtikelDetailProps> = async ({ 
    params
}) => {
  
    const artikel = await getArtikelDetail(params.artikelId);
    
    if (!artikel) {
      return null;
    }
    
  return (
    <Container>
        <BackButton />
        {artikel ? (
            <div className='mb-10'>
             <h1 className="judul mb-10">{artikel.label}</h1> 
            <div className="grid place-items-center mb-10">
            <Image 
                src={artikel.imageUrl} 
                alt="Image" 
                width={300}
                height={300}
                className='hover:scale-110 rounded-lg transition'
            />
            </div>
            
            {/* Map through each paragraph in the artikel */}
            {artikel.teksArtikel.split('\n').map((paragraph, index) => (
              
                <p key={index} className='font-medium text-lg text-justify px-9 mb-5'>{paragraph}</p>
            ))}
            </div>
        ) : (
            <p>Loading artikel...</p>
        )}
    </Container>
  )
}

export default ArtikelDetail