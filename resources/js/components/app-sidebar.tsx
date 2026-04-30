import { Link } from '@inertiajs/react'
import { IconBook, IconFolder, IconGrid4 } from '@intentui/icons'
import { useEffect } from 'react'
import AppLogo from '@/components/app-logo'
import { NavFooter } from '@/components/nav-footer'
import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    useSidebar,
} from '@/components/ui/sidebar'
import { useCurrentUrl } from '@/hooks/use-current-url'
import { dashboard } from '@/routes'
import type { NavItem } from '@/types'

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: IconGrid4,
    },
]

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: IconFolder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: IconBook,
    },
]

export function AppSidebar() {
    const currentUrl = useCurrentUrl()

    const { setIsOpenOnMobile, isMobile, isOpenOnMobile } = useSidebar()
    useEffect(() => {
        if (isMobile && isOpenOnMobile) {
            setIsOpenOnMobile(false)
        }
    }, [currentUrl])
    return (
        <Sidebar collapsible='dock' intent='default'>
            <SidebarHeader>
                <Link className='flex items-center gap-x-2' href={dashboard()} prefetch>
                    <AppLogo />
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
                <NavFooter items={footerNavItems} className='mt-auto' />
            </SidebarContent>

            <SidebarFooter className='flex flex-row justify-between gap-4 group-data-[state=collapsed]:flex-col'>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    )
}
