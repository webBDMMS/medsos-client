"use client";
import { ComboboxForm } from "@/components/custom/combobox-form";
import { DatePickerWithRange } from "@/components/custom/date-range-picker";
import { Button } from "@/components/ui/button";
import {
  CreateMedsos,
  CreateMedsosSchema,
} from "@/constants/media-sosial/data";
import { KotaGO, SekretariatList } from "@/constants/nomor-telphone/data";
import { useValue } from "@/hooks/use-value";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const platformList = [
  { label: "Instagram", value: "instagram" },
  { label: "Google Maps", value: "google_maps" },
];

const schoolYearList = [
  { label: "2024/2025", value: "2024/2025" },
  { label: "2025/2026", value: "2025/2026" },
];

const FillterActions = () => {
  const { selectedValue, setSelectedValue } = useValue();

  console.log("selected platform", selectedValue);

  const form = useForm<CreateMedsos>({
    resolver: zodResolver(CreateMedsosSchema),
    defaultValues: {
      platform_type: "google_maps",
    },
  });

  const onSubmit = (data: CreateMedsos) => {
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
      <div className="grid grid-cols-5 gap-3 w-full">
        <ComboboxForm
          form={form}
          label="Jenis Platform"
          items={platformList}
          fieldName={"platform_type"}
          placeholder={"select..."}
          onSelect={(value) => setSelectedValue(value)}
        />
        <ComboboxForm
          form={form}
          label="Kota"
          items={KotaGO}
          fieldName={"city"}
          placeholder={"select..."}
        />

        {selectedValue === "instagram" ? (
          <ComboboxForm
            form={form}
            label="Akun"
            items={SekretariatList}
            fieldName={"account"}
            placeholder={"select..."}
          />
        ) : (
          <ComboboxForm
            form={form}
            label="Sekretariat"
            items={SekretariatList}
            fieldName={"sekretariat"}
            placeholder={"select..."}
          />
        )}

        <ComboboxForm
          form={form}
          label="Tahun Ajaran"
          items={schoolYearList}
          fieldName={"scholl_year"}
          placeholder={"select..."}
        />
        <div className="-mt-[6px]">
          <DatePickerWithRange
            form={form}
            fieldName="dateRange"
            placeholder="Pick a date range"
            limitToTwoMonths
          />
        </div>
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
      <div></div>
    </div>
  );
};

export default FillterActions;
