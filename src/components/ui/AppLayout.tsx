import { AppSidebar } from "./app-sidebar"
import { SidebarProvider, SidebarTrigger } from "./sidebar"

export const AppLayout = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </div>

    )
}
