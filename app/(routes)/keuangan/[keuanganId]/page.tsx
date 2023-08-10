import getKeuanganDetail from '@/actions/get-keuangan-detail';
import Keuangan from '@/components/keuangan';
import BackButton from '@/components/ui/back';
import Container from '@/components/ui/container';


export const revalidate = 0;

interface KeuanganDetailProps {
  params: {
    keuanganId: string;
  },
}

const KeuanganDetail: React.FC<KeuanganDetailProps> = async ({ 
    params
}) => {
  
    const keuangan = await getKeuanganDetail(params.keuanganId);
    
    if (!keuangan) {
      return null;
    }
    
  return (
    <Container>
        <BackButton />
        
          <div className='mb-10'>
            <h1 className="judul mb-10">{keuangan.bulan}</h1> 
            
            {/* keuangan */}
            <div className="px-4 py-10 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-1 lg:items-start lg:content-center lg:gap-x-8">
                <Keuangan images={keuangan.images} />
              </div>

            </div>
            
          </div>
        
    </Container>
  )
}

export default KeuanganDetail