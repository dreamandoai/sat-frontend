import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../components/Dialog";

interface CalculatorProps {
  isOpen: boolean
  onClose: () => void
  type: "scientific" | "graphing"
}

export function Calculator({ isOpen, onClose, type }: CalculatorProps) {
  const calculatorUrl = type === "scientific" 
    ? "https://www.desmos.com/scientific"
    : "https://www.desmos.com/calculator"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>{type === "scientific" ? "Scientific" : "Graphing"} Calculator</span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <iframe
            title={`${type} Calculator`}
            src={calculatorUrl}
            width="100%"
            height="500"
            className="border border-sky-blue rounded-lg shadow-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}