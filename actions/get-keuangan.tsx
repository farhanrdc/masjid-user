import {Keuangan} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/keuangan`;

const getKeuangan = async (): Promise<Keuangan[]> => {
  const res = await fetch(URL)

  return res.json();
};

export default getKeuangan;