import { cn } from "@/lib/utils";

const StockTicker = ({
  isHighlighted,
  symbol,
  price,
  change,
}: {
  isHighlighted: boolean;
  symbol: string;
  price: number;
  change: number;
}) => {
  return (
    <div
      className={cn(
        "px-2 rounded text-center text-xs font-medium",
        isHighlighted
          ? "bg-[#F2F2F2] text-brand-blue-dark border border-black py-2"
          : "bg-brand-blue-dark text-[#F2F2F2] py-1"
      )}
    >
      <p>
        {symbol} | {Number(price).toFixed(2)}
        <span
          className={cn("ms-2", change > 0 && "text-[#3BBC1C]", change < 0 && "text-[#F96845]")}
        >
          {Number(change).toFixed(2)}%
        </span>
      </p>
    </div>
  );
};

export default StockTicker;
