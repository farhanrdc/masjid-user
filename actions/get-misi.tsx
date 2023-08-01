import {Misi} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/misi`;

const getMisi = async (): Promise<Misi[]> => {
  const res = await fetch(URL)

  return res.json();
};

export default getMisi;