export interface MenuItem {
  title: string;
  href?: string; // Optional, as not all menu items have an `href`
  icon: string;
  label: string;
  children?: MenuItem[]; // Optional, as not all menu items have `children`
}

export interface MenuResponse {
  data: MenuItem[];
}
