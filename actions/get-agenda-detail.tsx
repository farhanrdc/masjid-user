import {Agenda} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/agenda`;

const getAgendaDetail = async (id: string): Promise<Agenda> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getAgendaDetail;