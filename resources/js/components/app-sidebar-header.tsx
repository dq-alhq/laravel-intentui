import { Breadcrumbs } from '@/components/breadcrumbs'
import { SidebarNav, SidebarTrigger } from '@/components/ui/sidebar'
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types'

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    return (
        <SidebarNav>
            <span className='flex items-center gap-x-4'>
                <SidebarTrigger className='-ml-2.5 lg:ml-0' />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </span>
        </SidebarNav>
    )
}
