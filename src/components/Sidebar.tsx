"use client";

import * as React from "react";
import { Settings, UsersRound } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navMain, navSecondary } from "@/constants";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeMain, setActiveMain] = useState("Dashboard");
  const [activeSecondary, setActiveSecondary] = useState("");

  const { setOpen, open } = useSidebar();
  useEffect(() => {
    setOpen(false);
  }, []);
  useEffect(() => {
    if (activeMain === "Chat") {
      setActiveSecondary("Inbox");
    } else if (activeMain === "Settings") {
      setActiveSecondary("Account Details");
    } else {
      setActiveSecondary("");
    }
  }, [activeMain]);

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden min-h-full transition-none  max-h-full absolute *:data-[sidebar=sidebar]:flex-row "
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar collapsible="none" className="min-w-20 max-w-20 bg-blue-10">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu className="gap-2   items-center">
                {navMain.map((item) => (
                  <div key={item.title} className="flex flex-col items-center ">
                    <SidebarMenuItem
                      className={cn(
                        "rounded-md pr-1 hover:bg-blue-500",
                        activeMain === item.title && "bg-blue-500",
                        open && "pr-0"
                      )}
                    >
                      <SidebarMenuButton
                        tooltip={{
                          children: item.title,
                          hidden: false,
                        }}
                        onClick={() => {
                          switch (item.title) {
                            case "Chat":
                              setOpen(true);
                              break;
                            case "Settings":
                              setOpen(true);
                              break;
                            default:
                              setOpen(false);
                              break;
                          }
                          setActiveMain(item.title);
                        }}
                        className={
                          "px-2.5 md:px-2 bg-transparent hover:bg-transparent  active:bg-transparent [&>svg]:w-[21px] [&>svg]:h-[21px]"
                        }
                      >
                        <item.icon />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <p className="text-[12px] text-center break-words">
                      {item.title}
                    </p>
                  </div>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}

      {activeMain === "Chat" && (
        <Sidebar
          collapsible="none"
          className="hidden bg-blue-20 md:flex-1 md:flex rounded-tl-md border-r"
        >
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-lg pt-1 -ml-2 gap-[6px] [&>svg]:w-5 [&>svg]:h-5 flex items-center  text-gray-800 font-semibold mb-3">
                <UsersRound />
                Team Inbox
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navSecondary.Chat.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        onClick={() => setActiveSecondary(item.title)}
                        className={cn(
                          "flex gap-2 rounded-md  [&>svg]:w-4 [&>svg]:h-4",
                          activeSecondary === item.title
                            ? "bg-white text-blue-600 font-semibold shadow-sm border border-blue-300"
                            : "hover:bg-blue-200"
                        )}
                      >
                        <item.icon />
                        <p className="text-[14px]">{item.title}</p>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      )}

      {activeMain === "Settings" && (
        <Sidebar
          collapsible="none"
          className="hidden bg-blue-20 md:flex-1 md:flex rounded-tl-md border-r"
        >
          <SidebarContent className="flex flex-col">
            {/* Fixed Header */}
            <div className="text-lg pl-4 pt-4 gap-[6px] [&>svg]:w-5 [&>svg]:h-5 flex items-center  text-gray-800 font-semibold">
              <Settings />
              <p>Settings</p>
            </div>

            {/* Scrollable Menu Section */}
            <div className="flex-1 overflow-y-auto px-2">
              {navSecondary.Settings.map((section) => (
                <SidebarGroup key={section.label} className="-mb-2">
                  <SidebarGroupLabel className="text-xs font-bold text-gray-500">
                    {section.label}
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {section.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            onClick={() => setActiveSecondary(item.title)}
                            className={cn(
                              "flex gap-2 rounded-md [&>svg]:w-4 [&>svg]:h-4",
                              activeSecondary === item.title
                                ? "bg-white text-blue-600 font-semibold shadow-sm border border-blue-300"
                                : "hover:bg-blue-200"
                            )}
                          >
                            <item.icon />
                            <p className="text-[14px]">{item.title}</p>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </div>
          </SidebarContent>
        </Sidebar>
      )}
    </Sidebar>
  );
}
