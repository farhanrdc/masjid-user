import {Kontak} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/kontak`;

const getKontak = async (): Promise<Kontak[]> => {
  const res = await fetch(URL)

  return res.json();
};

export default getKontak;