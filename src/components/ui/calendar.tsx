import * as React from "react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

export type CalendarProps = React.HTMLAttributes<HTMLDivElement>

function Calendar({
  className,
  ...props
}: CalendarProps) {
  return (
    <div
      className={cn("p-3 bg-background w-fit", className)}
      {...props}
    >
      <div className="text-sm font-medium text-foreground">Calendar Placeholder</div>
    </div>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
