import {Agenda} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/agenda`;

const getAgenda = async (): Promise<Agenda[]> => {
  const res = await fetch(URL)

  return res.json();
};

export default getAgenda;