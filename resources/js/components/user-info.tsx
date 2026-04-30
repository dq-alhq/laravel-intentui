import { Avatar } from '@/components/ui/avatar'
import { SidebarLabel } from '@/components/ui/sidebar'
import { initials } from '@/lib/utils'
import type { User } from '@/types'

export function UserInfo({ user, showEmail = false }: { user: User; showEmail?: boolean }) {
    return (
        <>
            <Avatar
                className='size-8 *:size-8 group-data-[state=collapsed]:size-6 group-data-[state=collapsed]:*:size-6'
                isSquare
                src={user.avatar}
                alt={user.name}
                initials={initials(user.name)}
            />
            <div className='in-data-[collapsible=dock]:hidden text-sm'>
                <SidebarLabel>{user.name}</SidebarLabel>
                {showEmail && <span className='-mt-0.5 block text-muted-fg'>{user.email}</span>}
            </div>
        </>
    )
}
