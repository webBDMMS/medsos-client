"use client";
import React, { lazy, Suspense, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useDialogStore from "@/hooks/use-dialog";

// Lazy load components
const ViewSekretariat = lazy(() => import("@/sections/gedung/view-data"));
const ViewPhone = lazy(
  () => import("@/sections/aset-digital/nomor-telepon/mutate-data")
);
const MedsosActions = lazy(
  () => import("@/sections/aset-digital/medsos/mutate-data")
);
const GMapsActions = lazy(
  () => import("@/sections/aset-digital/google-maps/mutate-data")
);
const VerifyActions = lazy(
  () =>
    import(
      "@/sections/productivitas-digital/verifikasi-productivitas/mutate-data"
    )
);

export const CustomModal = () => {
  const { isOpen, closeDialog, dialogType } = useDialogStore();

  // Set the label based on the dialogType
  const label = useMemo(() => {
    switch (dialogType) {
      case "sekretariat":
        return "Manage Sekretariat";
      case "phone":
        return "Manage Data Handphone";
      case "edit phone":
        return "Edit Phone";
      case "medsos":
        return "Manage Social Media";
      case "edit medsos":
        return "Edit Social Media";
      case "gmaps":
        return "Manage Google Maps";
      case "edit gmaps":
        return "Edit Google Maps";
      case "verify":
        return "Update Status Productivity";
      default:
        return "Dialog";
    }
  }, [dialogType]);

  // ? ===== render content =====
  const renderContent = () => {
    switch (dialogType) {
      case "sekretariat":
        return <ViewSekretariat />;
      case "phone":
        return <ViewPhone />;
      case "edit phone":
        return <ViewPhone isEdit={true} />;
      case "medsos":
        return <MedsosActions />;
      case "edit medsos":
        return <MedsosActions isEdit={true} />;
      case "gmaps":
        return <GMapsActions />;
      case "edit gmaps":
        return <GMapsActions isEdit={true} />;
      case "verify":
        return <VerifyActions />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent className="w-auto h-auto max-w-[90vw] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle data-id={`title-${label}`} className="capitalize">
            {label}
          </DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription> */}
        </DialogHeader>
        {/* Suspense to handle lazy loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <div className="w-full h-full min-w-[600px] max-w-3xl">
            {renderContent()}
          </div>
        </Suspense>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
