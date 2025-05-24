"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useStocks from "@/hooks/useStocks";
import { useCallback, useEffect, useState } from "react";
import StockTicker from "./StockTicker";

import { ChevronLeft, ChevronRight } from "lucide-react";

type StockInfo = {
  symbol: string;
  name: string;
  close: string;
  percent_change: string;
};

const StockList = ({ apiKey }: { apiKey: string }) => {
  const { data, isLoading, error } = useStocks(apiKey);
  const [api, setApi] = useState<CarouselApi>();

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return null;
  }

  if (!isLoading && data) {
    return (
      <div className="flex flex-col space-y-1 lg:items-center lg:flex-row lg:space-x-2">
        <div className="flex justify-between">
          <Select defaultValue="top-securities">
            <SelectTrigger className="border-0 shadow-none text-brand-blue-dark font-medium text-md p-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top-securities">Top Securities</SelectItem>
              <SelectItem value="featured-stocks">Featured Stocks</SelectItem>
              <SelectItem value="trending-tickers">Trending Tickers</SelectItem>
            </SelectContent>
          </Select>

          {!isLoading && data && (
            <div className="flex lg:hidden -space-x-1">
              <button
                onClick={scrollPrev}
                className={canScrollPrev ? "text-brand-blue-dark" : "text-brand-gray-light"}
                disabled={!canScrollPrev}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={scrollNext}
                className={canScrollNext ? "text-brand-blue-dark" : "text-brand-gray-light"}
                disabled={!canScrollNext}
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>

        <div className="lg:w-10/12">
          {isLoading && (
            <div className="flex gap-2 overflow-hidden">
              <Skeleton className="h-8 w-full md:basis-1/2 lg:basis-1/3" />
              <Skeleton className="hidden md:block h-8 md:basis-1/2 lg:basis-1/3" />
              <Skeleton className="hidden lg:block h-8 lg:basis-1/3" />
            </div>
          )}

          {!isLoading && data && (
            <Carousel
              setApi={setApi}
              className="flex md:flex-row gap-2 w-full overflow-hidden relative"
            >
              <CarouselContent className="items-center">
                {Object.entries(data).map(([, info], index) => {
                  const { symbol, close, percent_change } = info as StockInfo;
                  return (
                    <CarouselItem key={symbol} className="md:basis-1/3 lg:basis-1/2 xl:basis-1/3">
                      <StockTicker
                        isHighlighted={index === 0}
                        symbol={symbol}
                        price={Number(close)}
                        change={Number(percent_change)}
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="hidden lg:flex -space-x-1">
                <button
                  onClick={scrollPrev}
                  className={canScrollPrev ? "text-brand-blue-dark" : "text-brand-gray-light"}
                  disabled={!canScrollPrev}
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={scrollNext}
                  className={canScrollNext ? "text-brand-blue-dark" : "text-brand-gray-light"}
                  disabled={!canScrollNext}
                >
                  <ChevronRight />
                </button>
              </div>
            </Carousel>
          )}
        </div>
      </div>
    );
  }
};

export default StockList;
