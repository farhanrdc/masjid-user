import getGaleri from "@/actions/get-galeri";
import GaleriList from "@/components/galeri-list";
import Container from "@/components/ui/container"

export const revalidate = 0;

const GaleriPage = async () => {
  const galeri = await getGaleri()
  return (
    <Container>
      <GaleriList items={galeri}/>
    </Container>
  )
}

export default GaleriPage;