import axiosApi from "@/lib/axios";
import { TypePhone } from "@/types/api-types/phone";
import { useQuery } from "@tanstack/react-query";
// Generic type for API response

const fetchPhone = async (): Promise<TypePhone[]> => {
  const { data } = await axiosApi.get("/no-tlp/all");
  return data;
};

export const useGetPhones = () => {
  return useQuery({
    queryKey: ["phone"],
    queryFn: fetchPhone,
  });
};
