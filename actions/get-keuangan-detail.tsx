import {Keuangan} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/keuangan`;

const getKeuanganDetail = async (id: string): Promise<Keuangan> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getKeuanganDetail;