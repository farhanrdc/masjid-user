import {Artikel} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/artikel`;

const getArtikel = async (): Promise<Artikel[]> => {
  const res = await fetch(URL)

  return res.json();
};

export default getArtikel;