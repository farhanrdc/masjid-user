import {Artikel} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/artikel`;

const getArtikelDetail = async (id: string): Promise<Artikel> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getArtikelDetail;