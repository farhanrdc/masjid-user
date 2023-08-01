import {Pengurus} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/pengurus`;

const getPengurus = async (): Promise<Pengurus[]> => {
  const res = await fetch(URL)

  return res.json();
};

export default getPengurus;