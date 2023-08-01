import {Sejarah} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/sejarah`;

const getSejarah = async (id: string): Promise<Sejarah> => {
  const res = await fetch(`${URL}/${id}`)

  return res.json();
};

export default getSejarah;