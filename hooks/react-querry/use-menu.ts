/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItem, MenuResponse } from "@/types/api-types/menu";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMenu = async (userId: string): Promise<MenuResponse> => {
  const { data } = await axios.get("http://localhost:5050/menu/my-menu", {
    params: { userId },
  });
  return data;
};
const transformMenu = (data: MenuResponse | undefined): MenuItem[] => {
  if (!data || !data.data) return [];
  return data.data;
};

export const useGetMenu = (userId: string) => {
  return useQuery({
    queryKey: ["menu", userId],
    queryFn: () => fetchMenu(userId),
    enabled: !!userId,
    select: (data) => transformMenu(data), // Transform the data before returning
  });
};
