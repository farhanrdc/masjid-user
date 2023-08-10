import KeuanganCard from "@/components/ui/keuangan-card";
import { Keuangan } from "@/types";
import NoResult from "@/components/ui/no-result";

interface KeuanganListProps {
  items: Keuangan[]
}

const KeuanganList : React.FC<KeuanganListProps> = ({
    items
  }) => {
  return (
    <div className="space-y-4 mb-20">
        <h1 className="judul mb-10">Keuangan</h1>
        {items.length === 0 && <NoResult />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {items.map((item) => (
            <KeuanganCard key={item.id} datas={item} />
        ))}
        </div>
  </div>
  )
}

export default KeuanganList