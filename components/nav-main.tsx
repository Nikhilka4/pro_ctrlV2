"use client";

import {
  ChevronRight,
  Home,
  Layers,
  BookOpen,
  DollarSign,
  Wrench,
} from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
      <SidebarMenu>
        {/* Dashboard Link */}
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip="Dashboard"
            className={
              isActive("/")
                ? "bg-slate-800 text-white hover:bg-slate-800 hover:text-white"
                : ""
            }
          >
            <Link href="/">
              <Home />
              <span>Dashboard</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {/* Projects Link */}
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip="Projects"
            className={
              isActive("/projects")
                ? "bg-slate-800 text-white hover:bg-slate-800 hover:text-white"
                : ""
            }
          >
            <Link href="/projects">
              <Layers />
              <span>Projects</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {/* Documentation Link */}
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip="Documentation"
            className={
              isActive("/documentation")
                ? "bg-slate-800 text-white hover:bg-slate-800 hover:text-white"
                : ""
            }
          >
            <Link href="/documentation">
              <BookOpen />
              <span>Documentation</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {/* Finance Link */}
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip="Finance"
            className={
              isActive("/finance")
                ? "bg-slate-800 text-white hover:bg-slate-800 hover:text-white"
                : ""
            }
          >
            <Link href="/finance">
              <DollarSign />
              <span>Finance</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {/* Tools Dropdown */}
        <Collapsible defaultOpen={true} className="group/collapsible w-full">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                tooltip="Tools"
                className={
                  pathname.startsWith("/tools")
                    ? "bg-slate-800 text-white hover:bg-slate-800 hover:text-white cursor-pointer"
                    : "cursor-pointer"
                }
              >
                <Wrench />
                <span>Tools</span>
                <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    asChild
                    className={
                      isActive("/tools/quote-estimator")
                        ? "bg-slate-800 text-white hover:bg-slate-800 hover:text-white"
                        : ""
                    }
                  >
                    <Link href="/tools/quote-estimator">
                      <span>Instant Quote Estimator</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    asChild
                    className={
                      isActive("/tools/gst-calculator")
                        ? "bg-slate-800 text-white hover:bg-slate-800 hover:text-white"
                        : ""
                    }
                  >
                    <Link href="/tools/gst-calculator">
                      <span>GST Calculator</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
