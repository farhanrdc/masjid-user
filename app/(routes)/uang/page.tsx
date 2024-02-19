import DataTable from '@/components/data-table';
import Container from '@/components/ui/container'


interface DataItem {
    bulan: string;
    pemasukan: string;
    pengeluaran: string;
  }
  
const data: DataItem[] = [
    { bulan: 'Mei', pemasukan: "Rp. 19.688.000", pengeluaran: "Rp. 2.600.000" },
    { bulan: 'Juni', pemasukan: "Rp. 22.550.000", pengeluaran: "Rp. 5.500.000" },
    { bulan: 'Juli', pemasukan: "Rp. 18.780.000", pengeluaran: "Rp. 3.310.000" },
    { bulan: 'Agustus', pemasukan: "Rp. 20.390.000", pengeluaran: "Rp. 4.230.000" },
    // Tambahkan data bulan berikutnya sesuai kebutuhan
  ];

const UangPage = async () => {
  return (
    <Container>
      <div className="pt-10 pb-20 mx-4 bg-white">
        <h1 className="text-2xl font-semibold mb-4">Data Keuangan</h1>
        <DataTable data={data} />
      </div>
    </Container> 
  )
}

export default UangPage