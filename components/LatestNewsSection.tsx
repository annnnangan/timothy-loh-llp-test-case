"use client";
import NewsCard from "@/components/NewsCard";
import LeftArrowIcon from "@/components/icon/LeftArrow";
import RightArrowIcon from "@/components/icon/RightArrow";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/shadcn/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";

import { useCallback, useEffect, useState } from "react";
import { sfcNews } from "@/data/sfc-news";
import { cn } from "@/lib/utils";

const LatestNewsSection = () => {
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

  return (
    <div className="flex flex-col lg:flex-row justify-between py-12">
      <div className="flex items-end md:items-start justify-between mb-5 lg:mr-20 lg:mb-0">
        <div className="flex flex-row items-end lg:items-start gap-3 lg:flex-col">
          {/* Section Title */}
          <h2 className="text-[#97999b] lowercase text-2xl/8 font-DMSerifDisplay">
            latest <br />
            <span className="uppercase text-gray-50 text-[32px]">News</span>
          </h2>
          {/* Dropdown */}
          <Select defaultValue="sfc">
            <SelectTrigger
              className="border-0 shadow-none text-gray-50 font-medium text-md p-0"
              iconColor="text-gray-50"
              iconPosition="left"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sfc">SFC</SelectItem>
              <SelectItem value="hkex">HKEX</SelectItem>
              <SelectItem value="sfat">SFAT</SelectItem>
              <SelectItem value="mmt">MMT</SelectItem>
              <SelectItem value="ira">IRA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mobile swiper button */}
        <div className="flex gap-2 lg:gap-0 lg:hidden">
          <button
            onClick={scrollPrev}
            className="bg-gray-50/20 border border-gray-50 hover:bg-gray-50/30 transition p-1"
            disabled={!canScrollPrev}
          >
            <div className="block lg:hidden">
              <LeftArrowIcon isDisabled={canScrollPrev} size={20} />
            </div>
          </button>

          <button
            onClick={scrollNext}
            className="bg-gray-50/20 border border-gray-50 hover:bg-gray-50/30 transition p-1"
            disabled={!canScrollNext}
          >
            <RightArrowIcon isDisabled={canScrollNext} size={20} />
          </button>
        </div>
      </div>

      {/* Desktop left swiper button */}
      <button
        onClick={scrollPrev}
        className={cn(
          "bg-gray-50/20 border border-gray-50 hover:bg-gray-50/30 transition hidden lg:block",
          canScrollPrev ? "text-gray-50" : "text-brand-gray-light "
        )}
        disabled={!canScrollPrev}
      >
        <LeftArrowIcon isDisabled={canScrollPrev} size={40} />
      </button>

      {/* News */}
      <Carousel setApi={setApi} className="flex overflow-hidden">
        <CarouselContent className="px-5 lg:px-10">
          {sfcNews.map((item) => {
            return (
              <CarouselItem
                key={item.title}
                className="basis-full md:basis-1/2 xl:basis-1/3  md:border-l border-brand-beige hover:bg-black/30 transition"
              >
                <NewsCard
                  title={item.title}
                  description={item.description}
                  label={item.label}
                  date={item.date}
                  link={item.link}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Desktop right swiper button */}
      <button
        onClick={scrollNext}
        className={cn(
          "bg-gray-50/20 border border-gray-50 hover:bg-gray-50/30 transition hidden lg:block",
          canScrollNext ? "text-gray-50" : "text-brand-gray-light "
        )}
        disabled={!canScrollNext}
      >
        <RightArrowIcon isDisabled={canScrollNext} size={40} />
      </button>
    </div>
  );
};

export default LatestNewsSection;
