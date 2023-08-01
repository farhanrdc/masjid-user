import {Jumat} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/jumat`;

const getJumat = async (): Promise<Jumat[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getJumat;