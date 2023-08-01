import {Visi} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/visi`;

const getVisi = async (id: string): Promise<Visi> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getVisi;