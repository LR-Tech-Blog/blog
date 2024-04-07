import TooltipComplete from "./TooltipComplete";
import { Button } from "./ui/button";

interface IconButtonProps {
  alt: string;
  tooltipText: string;
  children: React.ReactNode;
}

export default function TooltipButton({
  alt,
  tooltipText,
  children,
}: IconButtonProps) {
  return (
    <TooltipComplete tooltipText={tooltipText}>
      <Button variant={"ghost"} size={"icon"} aria-label={alt}>
        {children}
      </Button>
    </TooltipComplete>
  );
}
