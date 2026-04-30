import type { ComponentPropsWithoutRef } from 'react'
import {
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSectionGroup,
} from '@/components/ui/sidebar'
import { toUrl } from '@/lib/utils'
import type { NavItem } from '@/types'

export function NavFooter({
    items,
    ...props
}: ComponentPropsWithoutRef<typeof SidebarSection> & {
    items: NavItem[]
}) {
    return (
        <SidebarSectionGroup {...props}>
            <SidebarSection>
                {items.map((item) => (
                    <SidebarItem
                        key={item.title}
                        href={toUrl(item.href)}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {item.icon && <item.icon />}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </SidebarItem>
                ))}
            </SidebarSection>
        </SidebarSectionGroup>
    )
}
