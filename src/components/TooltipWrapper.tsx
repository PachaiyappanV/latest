import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const TooltipWrapper = ({
  children,
  tooltipText,
}: {
  children: React.ReactNode;
  tooltipText: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="flex items-center  w-full justify-center">
          {children}
        </TooltipTrigger>
        <TooltipContent side="left">{tooltipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default TooltipWrapper;
