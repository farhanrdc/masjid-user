import {Faq} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/faq`;

const getFaq = async (): Promise<Faq[]> => {
  const res = await fetch(URL)

  return res.json();
};

export default getFaq;