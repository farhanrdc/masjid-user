import {Galeri} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/galeri`;

const getGaleri = async (): Promise<Galeri[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getGaleri;