/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "./multi-command";
import {
  Form,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface MultiSelectProps<T> {
  form: ReturnType<typeof useForm<any>>;
  items: { label: string; value: T }[];
  fieldName: string;
  label: string;
  disabled?: boolean;
  placeholder?: string;
  //   onSelect?: (value: T) => void;
}

export function MultiSelectForm<T>({
  form,
  items,
  fieldName,
  label,
  disabled,
  placeholder = "Select...",
//   onSelect,
}: MultiSelectProps<T>) {
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name={fieldName as any}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>{label}</FormLabel>
            <MultiSelector onValuesChange={field.onChange} values={field.value}>
              <MultiSelectorTrigger>
                <MultiSelectorInput
                  disabled={disabled}
                  data-id={`multi-select-${fieldName}`}
                  placeholder={placeholder}
                />
              </MultiSelectorTrigger>
              <MultiSelectorContent>
                <MultiSelectorList>
                  {items.map((item) => (
                    <MultiSelectorItem
                      key={item.value as "key"}
                      value={item.label}
                    >
                      <div className="flex items-center space-x-2">
                        <span data-id={`item-select-${item.value}`}>
                          {String(item.value)}
                        </span>
                      </div>
                    </MultiSelectorItem>
                  ))}
                </MultiSelectorList>
              </MultiSelectorContent>
            </MultiSelector>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
