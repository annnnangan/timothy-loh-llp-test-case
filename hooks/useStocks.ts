import { useQuery } from "@tanstack/react-query";

const useStocks = () => {
  return useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const res = await fetch("/api/stocks");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch stock data");
      }

      return data;
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default useStocks;
