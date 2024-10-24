"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputForm } from "@/components/custom/input-form";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CreateNomor,
  CreateNomorSchema,
  KotaGO,
  NomorData,
  NomorData2,
  PjList,
  SekretariatList,
} from "@/constants/nomor-telphone/data";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ComboboxForm } from "@/components/custom/combobox-form";
import { Checkbox } from "@/components/ui/checkbox";
// import { toast } from "sonner";

const ViewPhone = ({ isEdit }: { isEdit?: boolean }) => {
  const [isExpired, setIsExpired] = useState(false);
  console.log(isExpired);
  // Handler untuk menangani perubahan pada checkbox

  const form = useForm<CreateNomor>({
    resolver: zodResolver(CreateNomorSchema),
  });

  const onSubmit = (data: CreateNomor) => {
    console.log(JSON.stringify(data));
  };

  return (
    <Card className="w-full border-primary dark:border-muted-foreground">
      <CardContent className="py-3">
        <LableSperator title={"Wilayah:"} />
        <div className="flex gap-4 w-full">
          <div className="w-full">
            <ComboboxForm
              form={form}
              disabled={isEdit}
              label="Kota Go"
              items={KotaGO}
              fieldName={"kota_go"}
              placeholder={"select..."}
            />
          </div>
          <div className="w-full">
            <ComboboxForm
              form={form}
              disabled={isEdit}
              label="Sekretariat"
              items={SekretariatList}
              fieldName={"sekretariat"}
              placeholder={"select..."}
            />
          </div>
        </div>
        <LableSperator title={"Data Nomor:"} />
        <div className="flex gap-4 w-full">
          <div className="w-full">
            <div className="mt-[6px]">
              <ComboboxForm
                form={form}
                label="Penanggung jawab"
                items={PjList}
                fieldName={"pj"}
                placeholder={"select..."}
              />
            </div>

            {NomorData.map((field, idx) => (
              <div key={idx} className="mb-3">
                <InputForm
                  key={idx}
                  type={field.type}
                  form={form}
                  fieldName={field.value}
                  placeholder={field.label}
                />
              </div>
            ))}
          </div>
          <div className="w-full">
            {NomorData2.map((field, idx) => (
              <div key={idx} className="mb-3">
                <InputForm
                  key={idx}
                  type={field.type}
                  form={form}
                  fieldName={field.value}
                  placeholder={field.label}
                />
              </div>
            ))}

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                defaultChecked
                onCheckedChange={(checked) => setIsExpired(!checked)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Nomor Masih Aktif
              </label>
            </div>
            {isExpired && (
              <div
                className={`mt-2 transition-all duration-300 ease-in-out ${
                  isExpired ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
                }`}
              >
                <InputForm
                  type="date"
                  form={form}
                  fieldName="non_active_date"
                  placeholder="Tanggal Tidak Aktif"
                />
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-end mt-3 -mb-2">
        <Button onClick={form.handleSubmit(onSubmit)}>Simpan Data</Button>
      </CardFooter>
    </Card>
  );
};

export default ViewPhone;

const LableSperator = ({ title }: { title: string }) => {
  return (
    <div>
      <p className="text-sm text-primary">{title}</p>
      <Separator className="mt-1 mb-3 bg-primary" />
    </div>
  );
};
