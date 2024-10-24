/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ComboboxForm } from "@/components/custom/combobox-form";
import { DatePickerWithRange } from "@/components/custom/date-range-picker";
// import { DatePickerWithRange } from "@/components/custom/date-range-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useValue } from "@/hooks/use-value";
import React from "react";
import { useForm } from "react-hook-form";

const platformList = [
  { label: "Instagram", value: "instagram" },
  { label: "Google Maps", value: "google_maps" },
];

const FillterActions = () => {
  const { selectedValue, setSelectedValue } = useValue();

  console.log("selected platform", selectedValue);

  const form = useForm<any>({
    defaultValues: {
      platform_type: "google_maps",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Data Valid:", JSON.stringify(data));
  };

  // Log valid and invalid values before submitting
  const handleCheckBeforeSubmit = () => {
    const values = form.watch(); // Get current form values
    const errors = form.formState.errors; // Get validation errors

    console.log("Current Form Values:", values); // Log current form values
    console.log("Validation Errors:", errors); // Log errors if any
  };

  return (
    <div>
      <div className="flex gap-3 w-full">
        <div className="w-[220px]">
          <ComboboxForm
            form={form}
            label="Jenis Platform"
            items={platformList}
            fieldName={"platform_type"}
            placeholder={"select..."}
            onSelect={(value) => setSelectedValue(value)}
          />
        </div>

        {selectedValue === "google_maps" ? (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>Minggu</Label>
            <div className="flex gap-2 items-center">
              <Input isNumbers type="start" id="start" placeholder="Awal" />
              <span>s/d</span>
              <Input isNumbers type="to" id="to" placeholder="Akhir" />
            </div>
          </div>
        ) : (
          <div className="-mt-[6px]">
            <DatePickerWithRange
              limitToTwoMonths
              form={form}
              fieldName="dateRange"
              placeholder="Periode"
            />
          </div>
        )}

        <div className="mt-[26px]">
          <Button
            onClick={() => {
              handleCheckBeforeSubmit(); // Log values before submit
              form.handleSubmit(onSubmit)(); // Proceed with submit
            }}
            className="w-[100px]"
          >
            Cari Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FillterActions;
