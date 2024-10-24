"use client";
import React, { useEffect, useState } from "react";
import TOCWrapper from "./tree/toc";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/custom/date-picker";
import { Textarea } from "@/components/ui/textarea";
import { DataTable } from "@/components/custom/data-table";
import { columns } from "./table/columns";
import {
  Productivitas,
  ProductivitasSchema,
} from "@/constants/productivitas-digital/input-productivitas/data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useProductivitasStore } from "@/hooks/use-productivitas";
import { toast } from "sonner";

type SelectedItem = {
  cabang: string;
  kota: string;
  sekretariat: string;
};

const ProductivitasActions = () => {
  const { tempData, addProductivitas, clearProductivitas } =
    useProductivitasStore(); // Gunakan store

  console.log("temporary", tempData);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const [inputValue, setInputValue] = useState("");
  const [platForm, setPlatForm] = useState("Unknown");

  // Array to keep track of existing links
  const existingLinks = tempData.map((item) => item.link);

  const detectPlatform = (url: string): string => {
    const instagramRegex =
      /https?:\/\/(www\.)?instagram\.com\/(reel|p)\/[A-Za-z0-9_-]+/;
    const googleMapsRegex = /https?:\/\/maps\.app\.goo\.gl\/[A-Za-z0-9_-]+/;

    if (instagramRegex.test(url)) {
      return "Instagram";
    } else if (googleMapsRegex.test(url)) {
      return "Google Maps";
    } else {
      return "Unknown";
    }
  };

  const form = useForm<Productivitas>({
    resolver: zodResolver(ProductivitasSchema),
  });

  const onSubmitTemp = (data: Productivitas) => {
    const newEntry = {
      id: Math.random().toString(36).slice(2, 11), // Generate unique ID
      sekretariat: data.sekretariat,
      date: data.date,
      platform: platForm,
      link: data.link,
    };

    // Check for duplicate links before adding
    if (existingLinks.includes(data.link)) {
      toast.error(
        "Link ini sudah ada di dalam daftar. Silakan pilih link yang berbeda."
      );
      return; // Prevent adding duplicate link
    }

    addProductivitas(newEntry); // Tambah data ke store zustand
    // Reset form setelah menambah data
    setInputValue("");
    form.reset({
      city: "",
      sekretariat: "",
      date: undefined, // Reset DatePicker
      platform: "",
      link: "",
    });
  };

  const onSubmitServer = () => {
    // platForm
    clearProductivitas(); // Hapus data sementara setelah dikirim ke server
  };

  // Watch for changes in selectedItem and set form values accordingly
  useEffect(() => {
    if (selectedItem) {
      form.setValue("city", selectedItem.kota);
      form.setValue("sekretariat", selectedItem.sekretariat);
    }
  }, [selectedItem, form]);

  // Log valid and invalid values before submitting
  const handleCheckBeforeSubmit = () => {
    const values = form.watch(); // Get current form values
    const errors = form.formState.errors; // Get validation errors

    console.log("Current Form Values:", values); // Log current form values
    console.log("Validation Errors:", errors); // Log errors if any
  };

  return (
    <div className="grid grid-cols-7 h-full">
      <div className="col-span-1 ">
        <TOCWrapper setSelectedItem={setSelectedItem} />
      </div>
      <div className="col-span-6 p-3 h-full">
        <Card className="w-full border-primary  dark:border-muted-foreground">
          <p className="font-bold my-1 text-center">Input Productivitas</p>
          <Separator />
          <Form {...form}>
            <form>
              <CardContent className="p-3">
                <div className="flex gap-3 mx-auto">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="grid w-full max-w-lg items-center gap-1.5">
                        <FormLabel htmlFor="kota">Kota</FormLabel>
                        <FormControl>
                          <Input
                            readOnly
                            className="cursor-not-allowed"
                            defaultValue={field.value || ""}
                            id="kota"
                            placeholder="Kota"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sekretariat"
                    render={({ field }) => (
                      <FormItem className="grid w-full max-w-lg items-center gap-1.5">
                        <FormLabel htmlFor="sekretariat">Sekretariat</FormLabel>
                        <FormControl>
                          <Input
                            readOnly
                            className="cursor-not-allowed"
                            defaultValue={field.value || ""}
                            id="sekretariat"
                            placeholder="Sekretariat"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="grid w-full max-w-lg items-center gap-1.5">
                        <FormLabel htmlFor="date">Tanggal</FormLabel>
                        <FormControl>
                          <DatePicker
                            twoDays
                            value={field.value}
                            onChange={(date: Date | undefined) =>
                              field.onChange(date)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-3 border rounded-md grid grid-cols-5 px-1 h-[570px]">
                  <div className="col-span-1 p-3 border-r">
                    <FormField
                      control={form.control}
                      name="link"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Input Link Productivitas</FormLabel>
                          <FormControl>
                            <Textarea
                              value={inputValue}
                              onChange={(e) => {
                                const value = e.target.value;
                                setInputValue(value);
                                field.onChange(value); // Call the original onChange
                                setPlatForm(detectPlatform(value)); // Detect platform
                              }}
                              placeholder="Masukkan URL disini"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-4 p-3">
                    <p className="text-sm mb-3">Daftar Productivitas</p>
                    <DataTable columns={columns} data={tempData} />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCheckBeforeSubmit();
                    form.handleSubmit(onSubmitTemp)();
                  }}
                >
                  Tambah Data
                </Button>
                <Button type="button" onClick={onSubmitServer}>
                  Simpan Data
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default ProductivitasActions;
