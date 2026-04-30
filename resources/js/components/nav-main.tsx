import {
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSectionGroup,
} from '@/components/ui/sidebar'
import { useCurrentUrl } from '@/hooks/use-current-url'
import { toUrl } from '@/lib/utils'
import type { NavItem } from '@/types'

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const { isCurrentUrl } = useCurrentUrl()

    return (
        <SidebarSectionGroup>
            <SidebarSection label='Platform'>
                {items.map((item) => (
                    <SidebarItem
                        key={item.title}
                        isCurrent={isCurrentUrl(item.href)}
                        href={toUrl(item.href)}
                        routerOptions={{ prefetch: true }}
                        tooltip={{ children: item.title }}
                    >
                        {item.icon && <item.icon />}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </SidebarItem>
                ))}
            </SidebarSection>
        </SidebarSectionGroup>
    )
}
