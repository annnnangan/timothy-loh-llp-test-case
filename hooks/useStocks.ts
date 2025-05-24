import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const symbols = "MSFT,AAPL,NVDA,AMZN,GOOGL,META,TSLA";

export const fetchStockQuotes = async (apiKey: string) => {
  const response = await axios.get(
    `https://api.twelvedata.com/quote?symbol=${symbols}&apikey=${apiKey}`
  );
  return response.data;
};

const useStocks = (apiKey: string) => {
  return useQuery({
    queryKey: ["stocks", apiKey],
    queryFn: () => fetchStockQuotes(apiKey),
    staleTime: 1000 * 60 * 60 * 24,
  });
};

export default useStocks;
