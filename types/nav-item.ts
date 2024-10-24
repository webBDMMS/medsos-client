import { Icons } from "@/components/custom/icons";

export interface NavItem {
  title: string;
  href?: string;
  icon?: keyof typeof Icons;
  disabled?: boolean;
  external?: boolean;
  description?: string;
  label?: string;
  children?: NavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
