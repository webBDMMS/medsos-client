import axiosApi from "@/lib/axios";
import { TypeSekretariat } from "@/types/api-types/sekretariat";
import { useQuery } from "@tanstack/react-query";

// Fungsi untuk fetch semua sekretariat
const fetchSekretariat = async (): Promise<TypeSekretariat[]> => {
  const { data } = await axiosApi.get("/sekretariat");
  return data;
};

// Fungsi untuk fetch sekretariat berdasarkan idPjCabang
const fetchSekretariatById = async (
  idPjCabang: string
): Promise<TypeSekretariat[]> => {
  // Kembalikan array, bukan single object
  const { data } = await axiosApi.get("/sekretariat", {
    params: { idpjcabang: idPjCabang },
  });
  return data;
};

// Fungsi untuk transform data menjadi options
const transformOptions = (
  data: TypeSekretariat[] | undefined
): { value: string; label: string }[] =>
  data?.map((sekretariat: TypeSekretariat) => ({
    value: sekretariat.unit,
    label: sekretariat.unit,
  })) ?? [];

// Hook untuk fetch semua sekretariat
export const useGetSekretariats = () => {
  return useQuery({
    queryKey: ["sekretariat"],
    queryFn: fetchSekretariat,
  });
};

// Hook untuk fetch sekretariat berdasarkan idPjCabang
export const useGetSekretariatsById = (idPjCabang: string) => {
  return useQuery({
    queryKey: ["sekretariat", idPjCabang],
    queryFn: () => fetchSekretariatById(idPjCabang),
    enabled: !!idPjCabang, // Fetch only if idPjCabang is provided
    select: (data) => transformOptions(data), // Transform data into options
  });
};
