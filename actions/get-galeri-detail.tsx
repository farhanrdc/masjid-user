import {Galeri} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/galeri`;

const getGaleriDetail = async (id: string): Promise<Galeri> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getGaleriDetail;