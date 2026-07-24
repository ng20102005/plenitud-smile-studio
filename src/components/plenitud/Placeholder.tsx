import { ImageIcon } from "lucide-react";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement> & {
  label?: string;
  dimensions?: string;
};

export function Placeholder({ label, dimensions, className, ...rest }: Props) {
  return (
    <div
      role="img"
      aria-label={label ?? "Imagen"}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-[oklch(0.93_0.018_85)] text-muted-foreground",
        className,
      )}
      {...rest}
    >
      <div className="flex flex-col items-center gap-2 opacity-70">
        <ImageIcon className="h-8 w-8" strokeWidth={1.25} />
        {dimensions ? (
          <span className="text-xs tracking-widest uppercase">{dimensions}</span>
        ) : null}
      </div>
    </div>
  );
}
