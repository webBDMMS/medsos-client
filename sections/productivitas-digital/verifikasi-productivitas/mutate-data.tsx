"use client";

import { InputForm } from "@/components/custom/input-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Mutate,
  MutateSchema,
  VerifyData,
} from "@/constants/productivitas-digital/verifikasi-productivitas/data";
import { useValue } from "@/hooks/use-value";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const VerifyActions = () => {
  const { selectedValue } = useValue();
  const [isNotAcc, setIsNotAcc] = useState(false);

  const form = useForm<Mutate>({
    resolver: zodResolver(MutateSchema),
  });

  const onSubmit = (data: Mutate) => {
    console.log("Data Valid:", JSON.stringify(data));
  };

  // Log valid and invalid values before submitting
  const handleCheckBeforeSubmit = () => {
    const values = form.watch(); // Get current form values
    const errors = form.formState.errors; // Get validation errors

    console.log("Current Form Values:", values); // Log current form values

    // Check if there are validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation Errors:", errors); // Log errors if any
    } else {
      console.log("No validation errors."); // Log if no errors
    }
  };

  const leftData = VerifyData.slice(0, 2);
  const rightData = VerifyData.slice(2);

  const [activeButton, setActiveButton] = useState<"Acc" | "Tidak Acc" | null>(
    null
  ); // Track which button is active

  const handleAccClick = () => {
    setActiveButton("Acc"); // Set "Acc" as active
    setIsNotAcc(false); // Hide additional fields
    form.setValue("status", "Acc"); // Set status to "Acc"
    form.setValue("reasons", ""); // Clear reasons
  };

  const handleTidakAccClick = () => {
    setActiveButton("Tidak Acc"); // Set "Tidak Acc" as active
    setIsNotAcc(true); // Show additional fields
    form.setValue("status", "Tidak Acc"); // Set status to "Tidak Acc"
  };

  return (
    <Card className="w-full border-primary dark:border-muted-foreground">
      <CardContent className="p-3 gap-4">
        <div className="flex gap-3 justify-center">
          <div className="w-full">
            {leftData.map((field, idx) => (
              <InputForm
                key={idx}
                type={field.type}
                form={form}
                fieldName={field.value}
                placeholder={field.label}
              />
            ))}
          </div>
          <div className="w-full">
            {rightData.map((field, idx) => (
              <InputForm
                key={idx}
                type={field.type}
                form={form}
                fieldName={field.value}
                placeholder={field.label}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-3 justify-center mt-3">
          <Button
            className={`w-full border-red-500 border ${
              activeButton === "Tidak Acc" ? "bg-red-500" : "bg-zinc-950"
            }`}
            onClick={handleTidakAccClick}
          >
            Tidak Acc
          </Button>
          <Button
            className={`w-full border-green-500 border ${
              activeButton === "Acc" ? "bg-green-500" : "bg-zinc-950"
            }`}
            onClick={handleAccClick}
          >
            Acc
          </Button>
        </div>

        {isNotAcc && (
          <div className="mt-3">
            <p className="text-sm mb-2">Keterangan Tidak Acc:</p>
            <div className="flex gap-3 justify-between">
              {selectedValue === "instagram" ? (
                <Textarea
                  placeholder="Type your message here."
                  {...form.register("reasons")}
                />
              ) : (
                <>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={form.watch("reasons") === "Ulasan Tidak Ada"}
                      onCheckedChange={() => {
                        const currentReason = form.watch("reasons");
                        if (currentReason !== "Ulasan Tidak Ada") {
                          // Set the new reason value
                          form.setValue("reasons", "Ulasan Tidak Ada");
                        } else {
                          // Uncheck and remove the value
                          form.setValue("reasons", "");
                        }
                      }}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Ulasan Tidak Ada
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms1"
                      checked={form.watch("reasons") === "Ulasan Tidak Dijawab"}
                      onCheckedChange={() => {
                        const currentReason = form.watch("reasons");
                        if (currentReason !== "Ulasan Tidak Dijawab") {
                          // Set the new reason value
                          form.setValue("reasons", "Ulasan Tidak Dijawab");
                        } else {
                          // Uncheck and remove the value
                          form.setValue("reasons", "");
                        }
                      }}
                    />
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Ulasan Tidak Dijawab
                    </label>
                  </div>
                </>
              )}
            </div>
            {/* Error message for the 'reasons' field */}
            {form.formState.errors.reasons && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.reasons?.message}
              </p>
            )}
          </div>
        )}
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

export default VerifyActions;
