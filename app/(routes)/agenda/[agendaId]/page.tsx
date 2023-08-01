import getAgendaDetail from '@/actions/get-agenda-detail';
import BackButton from '@/components/ui/back';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface AgendaDetailProps {
  params: {
    agendaId: string;
  },
}

const AgendaDetail: React.FC<AgendaDetailProps> = async ({ 
    params
}) => {
  
    const agenda = await getAgendaDetail(params.agendaId);
    
    if (!agenda) {
      return null;
    }
    
  return (
    <Container>
        <BackButton />
        {agenda ? (
          <div className='mb-10'>
            <h1 className="judul mb-10">{agenda.label}</h1> 
            <img src={agenda.imageUrl} alt="agenda" className="rounded-xl bg-cover mb-16 mx-auto"/>
             
            {/* Map through each paragraph in the agenda */}
            {agenda.teksAgenda.split('\n').map((paragraph, index) => (
              
              <p key={index} className='font-medium text-lg ml-20 text-justify px-9 mb-5'>{paragraph}</p>
          ))}
            
          </div>
        ) : (
            <p>Loading agenda...</p>
        )}
    </Container>
  )
}

export default AgendaDetail