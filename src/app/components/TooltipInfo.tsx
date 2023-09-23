import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface TooltipInfoProps {
  children: React.ReactNode;
  hoverMessage: string;
}

export function TooltipInfo({ children, hoverMessage }: TooltipInfoProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{hoverMessage}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
