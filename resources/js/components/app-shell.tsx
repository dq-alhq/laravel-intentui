import { usePage } from '@inertiajs/react'
import type { ReactNode } from 'react'
import { NavbarProvider } from '@/components/ui/navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import type { AppVariant } from '@/types'

type Props = {
    children: ReactNode
    variant?: AppVariant
}

export function AppShell({ children, variant = 'sidebar' }: Props) {
    const isOpen = usePage().props.sidebarOpen

    if (variant === 'header') {
        return <NavbarProvider defaultOpen={false}>{children}</NavbarProvider>
    }

    return <SidebarProvider defaultOpen={isOpen}>{children}</SidebarProvider>
}
