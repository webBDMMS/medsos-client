"use client";
import { DashboardNav } from "@/components/custom/layouts/dashboard-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetMenu } from "@/hooks/react-querry/use-menu";
import { useSidebar } from "@/hooks/use-sidebar";
import userStore from "@/hooks/use-user-data";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { user } = userStore();
  const { isMinimized, toggle } = useSidebar();

  // Only call useGetMenu if user is not null
  const userId = user?.id;

  const { data: navItems, isLoading, error } = useGetMenu(userId || ""); 
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading menu</div>;

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `relative  hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block`,
        !isMinimized ? "w-72" : "w-[72px]",
        className
      )}
    >
      <div className="hidden p-1 pt-10 lg:block">
        <div className="grid grid-cols-5 ml-2 gap-x-20">
          <div className="col-span-1">
            <Avatar
              className={cn(
                "transition-all duration-500",
                isMinimized ? "h-11 w-11" : "h-16 w-16"
              )}
            >
              <AvatarImage
                src="https://res.cloudinary.com/dzxxupjbz/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724116366/king-doel_fltcfa.jpg"
                alt="go-profile"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          {!isMinimized && (
            <div
              className={cn(
                "col-span-3 transition-all duration-500",
                isMinimized ? "opacity-0" : "opacity-100"
              )}
            >
              <p>Nama: {user?.nama}</p>
              <p className="text-sm">Jabatan: {user?.role.replace("_", " ").toUpperCase()}</p>
            </div>
          )}
        </div>
      </div>
      <ChevronLeft
        className={cn(
          "absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          isMinimized && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </aside>
  );
}
