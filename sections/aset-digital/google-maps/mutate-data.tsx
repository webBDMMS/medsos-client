import { ComboboxForm } from "@/components/custom/combobox-form";
import { InputForm } from "@/components/custom/input-form";
import { MultiSelectForm } from "@/components/custom/multi-select-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { CreateGMaps, CreateGMapsSchema, GMapsData } from "@/constants/google-maps/data";
import {
  KotaGO,
  phoneNumbers,
  SekretariatList,
} from "@/constants/nomor-telphone/data";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const GMapsActions = ({ isEdit }: { isEdit?: boolean }) => {
  const [isAktif, setIsAktif] = useState(false);
  const leftGMapsData = GMapsData.slice(0, 1);
  const rightGMapsData = GMapsData.slice(1);

  const form = useForm<CreateGMaps>({
    resolver: zodResolver(CreateGMapsSchema),
  });

  const onSubmit = (data: CreateGMaps) => {
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
    <Card className="w-full border-primary dark:border-muted-foreground">
      <CardContent className="p-3 flex gap-4">
        <div className="w-full mt-[6px]">
          <ComboboxForm
            form={form}
            disabled={isEdit}
            label="Kota Go"
            items={KotaGO}
            fieldName={"city"}
            placeholder={"select..."}
          />
          <MultiSelectForm
            form={form}
            disabled={isEdit}
            items={SekretariatList}
            fieldName="sekretariat"
            placeholder="select..."
            label="Sekretariat"
          />
          <div className="mt-1">
            <ComboboxForm
              form={form}
              label="Nomor Telepone"
              items={phoneNumbers}
              fieldName={"phone_publish"}
              placeholder={"select..."}
            />
          </div>
          {leftGMapsData.map((field, idx) => (
            <div
              key={idx}
              // className={`transition-all duration-300 ease-in-out ${
              //   idx === 0 && isAktif ? "mt-[39px]" : "mt-1"
              // }`}
            >
              <InputForm
                type={field.type}
                form={form}
                fieldName={field.value}
                placeholder={field.label}
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          {rightGMapsData.map((field, idx) => (
            <InputForm
              key={idx}
              type={field.type}
              form={form}
              fieldName={field.value}
              placeholder={field.label}
            />
          ))}

          <Controller
            name="status"
            control={form.control}
            defaultValue="Aktif"
            render={({ field }) => (
              <div className="flex items-center space-x-2 mt-2">
                <Switch
                  id="terms"
                  checked={field.value === "Aktif"}
                  onCheckedChange={(checked) => {
                    const newValue = checked ? "Aktif" : "Non Aktif";
                    field.onChange(newValue);
                    setIsAktif(!checked);
                  }}
                />
                <Label htmlFor="terms">
                  {isAktif ? "Tidak Aktif" : "Aktif"}
                </Label>
              </div>
            )}
          />
          {isAktif && (
            <div
              className={`mt-[10px] transition-all duration-300 ease-in-out ${
                isAktif ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
              }`}
            >
              <InputForm
                type="text"
                form={form}
                fieldName="reasons"
                placeholder="Alasan"
              />
            </div>
          )}
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-end mt-3 -mb-2">
        <Button
          onClick={() => {
            handleCheckBeforeSubmit(); // Log values before submit
            form.handleSubmit(onSubmit)(); // Proceed with submit
          }}
        >
          Simpan Data
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GMapsActions;
