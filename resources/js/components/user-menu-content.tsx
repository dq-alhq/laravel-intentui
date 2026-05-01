import { router } from '@inertiajs/react'
import { IconLogout, IconSettings } from '@intentui/icons'
import { Avatar } from '@/components/ui/avatar'
import { MenuHeader, MenuItem, MenuLabel, MenuSeparator } from '@/components/ui/menu'
import { useMobileNavigation } from '@/hooks/use-mobile-navigation'
import { initials, toUrl } from '@/lib/utils'
import { logout } from '@/routes'
import { edit } from '@/routes/profile'
import type { User } from '@/types'

type Props = {
    user: User
    showEmail?: boolean
}

export function UserMenuContent({ user, showEmail = true }: Props) {
    const cleanup = useMobileNavigation()

    const handleLogout = () => {
        cleanup()
        router.flushAll()
        router.post(toUrl(logout()))
    }

    return (
        <>
            <MenuHeader className='p-0 font-normal'>
                <div className='flex items-center gap-2 p-1.5 text-left text-sm'>
                    <Avatar
                        className='size-8 *:size-8 group-data-[state=collapsed]:size-6 group-data-[state=collapsed]:*:size-6'
                        isSquare
                        src={user.avatar}
                        alt={user.name}
                        initials={initials(user.name)}
                    />
                    <div className='in-data-[collapsible=dock]:hidden text-sm'>
                        <span className='font-medium'>{user.name}</span>
                        {showEmail && (
                            <span className='-mt-0.5 block text-muted-fg'>{user.email}</span>
                        )}
                    </div>
                </div>
            </MenuHeader>
            <MenuSeparator />
            <MenuItem href={toUrl(edit())} onAction={cleanup}>
                <IconSettings />
                <MenuLabel>Settings</MenuLabel>
            </MenuItem>
            <MenuSeparator />
            <MenuItem onAction={handleLogout} data-test='logout-button'>
                <IconLogout />
                <MenuLabel>Log out</MenuLabel>
            </MenuItem>
        </>
    )
}
