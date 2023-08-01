import {Wallpaper} from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/wallpaper`;

const getWallpaper = async (id: string): Promise<Wallpaper> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getWallpaper;