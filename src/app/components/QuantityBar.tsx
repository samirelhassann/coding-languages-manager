interface QuantityBarProps {
  value: number;
}

export function QuantityBar({ value }: QuantityBarProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <div
            className="rounded-full p-[2px] border border-secondary-foreground"
            // eslint-disable-next-line react/no-array-index-key
            key={`quantity-bar-${i}`}
          >
            <div
              className="rounded-full h-3 w-3 p-[2px] data-[filled=true]:bg-secondary-foreground"
              data-filled={i <= value - 1}
            />
          </div>
        );
      })}
    </div>
  );
}
