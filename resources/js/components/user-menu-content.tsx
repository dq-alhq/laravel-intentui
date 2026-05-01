import { router } from '@inertiajs/react'
import { IconLogout, IconSettings } from '@intentui/icons'
import { MenuHeader, MenuItem, MenuLabel, MenuSeparator } from '@/components/ui/menu'
import { UserInfo } from '@/components/user-info'
import { useMobileNavigation } from '@/hooks/use-mobile-navigation'
import { toUrl } from '@/lib/utils'
import { logout } from '@/routes'
import { edit } from '@/routes/profile'
import type { User } from '@/types'

type Props = {
    user: User
}

export function UserMenuContent({ user }: Props) {
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
                    <UserInfo user={user} showEmail={true} />
                </div>
            </MenuHeader>
            <MenuSeparator />
            <MenuItem href={edit().url} onAction={cleanup}>
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
