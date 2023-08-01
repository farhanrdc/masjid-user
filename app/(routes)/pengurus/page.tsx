import getPengurus from "@/actions/get-pengurus"
import PengurusList from "@/components/pengurus-list"
import Container from "@/components/ui/container"


export const  revalidate = 0

const PengurusPage = async () => {
  const pengurus = await getPengurus()
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <PengurusList datas={pengurus}/>
        </div>
      </div>
       
    </Container>
  )
}

export default PengurusPage