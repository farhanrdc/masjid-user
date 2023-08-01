import Container from '@/components/ui/container'
import Kontak from '@/components/kontak';
import getKontak from '@/actions/get-kontak';

export const revalidate = 0

const KontakPage = async () => {
  const kontak = await getKontak();
  return (
    <Container>
      <div className="pt-10 pb-20 mx-4 bg-white grid place-items-center ">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfMhTAtX5Z_Gth2gyUlLF0GHwPgG_MOTpSM9qyWAjJ2CaW4Mw/viewform?embedded=true" width="640" height="950" style={{ border: "none", margin: "0" }}>Memuat…</iframe>
        <Kontak data={kontak}/>
      </div>
    </Container> 
  )
}

export default KontakPage