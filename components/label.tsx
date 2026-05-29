import clsx from "clsx";
import Price from "./price";

const Label = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 flex w-full px-3 pb-3 @container/label",
        {
          "lg:px-20 lg:pb-[35%]": position === "center",
        },
      )}
    >
      <div className="flex w-full min-w-0 items-center rounded-full border border-white/20 bg-white/85 p-1 text-xs font-semibold text-ink backdrop-blur-md">
        <h3 className="mr-2 min-w-0 flex-1 truncate pl-2 leading-none tracking-tight">
          {title}
        </h3>
        <Price
          className="flex-none whitespace-nowrap rounded-full bg-navy px-3 py-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
