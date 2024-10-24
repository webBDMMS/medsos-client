/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ComboboxFormProps<T> {
  form: ReturnType<typeof useForm<any>>;
  items: { label: string; value: T }[];
  fieldName: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  onSelect?: (value: T) => void; // Callback for selection
}

export function ComboboxForm<T>({
  form,
  items,
  fieldName,
  placeholder = "Select...",
  label,
  disabled,
  onSelect,
}: ComboboxFormProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name={fieldName as any}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="mb-1 capitalize">{label}</FormLabel>

            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <FormControl data-id={`combo-box-${fieldName}`}>
                  <Button
                    disabled={disabled}
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between h-10",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? items.find((item) => item.value === field.value)?.label
                      : placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder={`Search ${placeholder}...`} />
                  <CommandList>
                    <CommandEmpty>No {placeholder} found.</CommandEmpty>
                    <CommandGroup>
                      {items.map((item) => (
                        <CommandItem
                          data-id={`item-value-${item.value}`}
                          value={item.label}
                          key={item.value as "key"}
                          onSelect={() => {
                            form.setValue(fieldName as any, item.value);
                            setIsOpen(false); // Close the popover
                            if (onSelect) {
                              onSelect(item.value); // Call onSelect callback
                            }
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              item.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {item.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
