import { NavItem } from "@/types/nav-item";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Gedung",
    href: "/gedung",
    icon: "building",
    label: "gedung",
  },
  {
    title: "Data Aset Digital",
    icon: "database",
    label: "data-aset-digital",
    children: [
      {
        title: "Input Aset Digital",
        icon: "post",
        label: "input-aset-digital",
        children: [
          {
            title: "Nomor Telepon",
            href: "/aset-digital/nomor-telepon",
            icon: "smartphone",
            label: "nomor-telepon",
          },
          {
            title: "Google Maps",
            href: "/aset-digital/google-maps",
            icon: "gmaps",
            label: "google-maps",
          },
          {
            title: "Media Sosial",
            href: "/aset-digital/media-sosial",
            icon: "instagram",
            label: "media-sosial",
          },
        ],
      },
      {
        title: "Produktivitas Digital",
        icon: "filecheck",
        label: "produktivitas-digital",
        children: [
          {
            title: "Input Produktivitas",
            href: "/productivitas-digital/input-productivitas",
            icon: "filecheck",
            label: "produktivitas-digital",
          },
          {
            title: "Verfikasi Produktivitas",
            href: "/productivitas-digital/verifikasi-productivitas",
            icon: "clipboard",
            label: "verfikasi-produktivitas",
          },
        ],
      },
      {
        title: "Dashboard Laporan",
        icon: "report",
        label: "dashboard-laporan",
        children: [
          {
            title: "Pemenuhan Target Kerja",
            href: "/dashboard-laporan/pemenuhan-target",
            icon: "calendarsearch",
            label: "pemenuhan-target-kerja",
          },
        ],
      },
    ],
  },
];
