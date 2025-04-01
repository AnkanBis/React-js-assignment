import { Calendar1, Inbox, Plus, Search, Settings, LogOutIcon } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useSetRecoilState } from "recoil";
import { authAtom } from "@/store/atoms/auth";

// Menu items.
const items = [
    {
        title: "Add task",
        url: "/app/addtask",
        icon: Plus,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Inbox",
        url: "/app/inbox",
        icon: Inbox,
    },
    {
        title: "Today",
        url: "#",
        icon: Calendar1,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    const setUser = useSetRecoilState(authAtom);

    function handleLogout() {
        localStorage.removeItem("user"); // Clear user from localStorage
        setUser(null); // Reset Recoil state
        window.location.href = "/signin"; // Redirect to Sign-in page
    }


    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (

                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <button onClick={handleLogout} className="flex items-center gap-2 text-red-500">
                                        <LogOutIcon/>
                                        <span>Logout</span>
                                    </button>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
