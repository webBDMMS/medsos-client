import axiosApi from "@/lib/axios";
import { TypeSekretariat } from "@/types/api-types/sekretariat";
import { useQuery } from "@tanstack/react-query";
// Generic type for API response



const fetchSekretariat = async (): Promise<TypeSekretariat[]> => {
  const { data } = await axiosApi.get("/sekretariat");
  return data;
};

export const useGetSekretariats = () => {
  return useQuery({
    queryKey: ["sekretariat"],
    queryFn: fetchSekretariat,
  });
};
