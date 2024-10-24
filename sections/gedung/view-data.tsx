"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { asetGMaps, asetInstagram } from "@/constants/secretariat/data";
import { Separator } from "@/components/ui/separator";
import { CirclePlus, Trash } from "lucide-react";

const ViewSekretariat = () => {
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([""]);

  const handleAddPhoneField = () => {
    if (phoneNumbers.length < 8) {
      setPhoneNumbers([...phoneNumbers, ""]); // Menambah field baru
    }
  };

  const handlePhoneChange = (index: number, value: string) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = value; // Memperbarui nomor telepon sesuai input
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handleRemovePhoneField = (index: number) => {
    const updatedPhoneNumbers = phoneNumbers.filter((_, i) => i !== index); // Menghapus field berdasarkan index
    setPhoneNumbers(updatedPhoneNumbers);
  };

  return (
    <Card className="w-full border-primary dark:border-muted-foreground">
      <CardContent className="p-3 flex  gap-4">
        <div>
          <p className="font-bold mb-2">Aset Google Maps</p>
          <Separator />

          {asetGMaps.map((item, idx) => (
            <div key={idx} className="mb-3">
              <Label htmlFor={item.label}>{item.label}</Label>
              <Input
                disabled
                id={item.label}
                type={item.type}
                placeholder={item.label.toLowerCase()}
              />
            </div>
          ))}
        </div>
        <div>
          <p className="font-bold mb-2">Aset Media Sosial</p>
          <Separator />
          {asetInstagram.map((item, idx) => (
            <div key={idx} className="mb-3">
              <Label htmlFor={item.label}>{item.label}</Label>
              <Input
                disabled
                id={item.label}
                type={item.type}
                placeholder={item.label.toLowerCase()}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-between">
            <p className="font-bold mb-2">Aset Nomor Telepon</p>
            <CirclePlus
              size={20}
              color="#d30707"
              className="cursor-pointer"
              onClick={handleAddPhoneField}
            />
          </div>
          <Separator />
          {phoneNumbers.map((phone, index) => (
            <div key={index}>
              <div className="flex justify-between mt-1">
                <Label htmlFor={`phone-${index}`}>
                  {index === 0 ? "Fix Phone" : `Phone ${index + 1}`}
                </Label>
                {index > 0 && ( // Hanya tampilkan ikon hapus jika lebih dari satu input field
                  <Trash
                    size={16}
                    color="#d30707"
                    className="cursor-pointer"
                    onClick={() => handleRemovePhoneField(index)}
                  />
                )}
              </div>
              <Input
                className="mt-1"
                id={`phone-${index}`}
                isPhone={true}
                placeholder="Masukan nomor telepon"
                value={phone}
                onChange={(e) => handlePhoneChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ViewSekretariat;
