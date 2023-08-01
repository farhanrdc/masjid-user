import getArtikel from "@/actions/get-artikel"
import ArtikelList from "@/components/artikel-list"
import Container from "@/components/ui/container"


export const  revalidate = 0

const ArtikelPage = async () => {
  const artikel = await getArtikel()
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <ArtikelList datas={artikel}/>
        </div>
      </div>
       
    </Container>
  )
}

export default ArtikelPage