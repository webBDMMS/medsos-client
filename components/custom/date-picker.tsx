"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, isBefore, subDays } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { id as indonesianLocale } from "date-fns/locale"; // Import Indonesian locale

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  twoDays?: boolean;
}

export function DatePicker({
  value,
  onChange,
  twoDays = false,
}: DatePickerProps) {
  const today = React.useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const yesterday = React.useMemo(() => subDays(today, 1), [today]);

  const disabledDates = React.useCallback(
    (date: Date) => {
      if (!twoDays) return false;
      return isBefore(date, yesterday) || date > today;
    },
    [twoDays, yesterday, today]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full h-10 justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? (
            format(value, "PPP", { locale: indonesianLocale })
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={disabledDates}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
