import Container from "@/components/ui/container"
import getAgenda from "@/actions/get-agenda"
import AgendaList from "@/components/agenda-list"

export const  revalidate = 0

const AgendaPage = async () => {
  const agenda = await getAgenda()
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <AgendaList datas={agenda}/>
        </div>
      </div>
     
  </Container>
  )
}

export default AgendaPage