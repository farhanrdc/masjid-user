import GaleriCard from "@/components/ui/galeri-card";
import { Galeri } from "@/types";
import NoResult from "@/components/ui/no-result";

interface GaleriListProps {
  items: Galeri[]
}

const GaleriList : React.FC<GaleriListProps> = ({
    items
  }) => {
  return (
    <div className="space-y-4 mb-20">
        <h1 className="judul mb-10">Galeri</h1>
        {items.length === 0 && <NoResult />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {items.map((item) => (
            <GaleriCard key={item.id} datas={item} />
        ))}
        </div>
  </div>
  )
}

export default GaleriList