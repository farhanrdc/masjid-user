import getKeuangan from "@/actions/get-keuangan";
import KeuanganList from "@/components/keuangan-list";
import Container from "@/components/ui/container"

export const revalidate = 0;

const KeuanganPage = async () => {
  const keuangan = await getKeuangan()
  return (
    <Container>
      <KeuanganList items={keuangan}/>
    </Container>
  )
}

export default KeuanganPage;