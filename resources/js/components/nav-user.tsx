import { usePage } from '@inertiajs/react'
import { IconChevronsUpDown } from '@intentui/icons'
import { Menu, MenuContent, MenuTrigger } from '@/components/ui/menu'
import { UserInfo } from '@/components/user-info'
import { UserMenuContent } from '@/components/user-menu-content'

export function NavUser() {
    const { auth } = usePage().props

    if (!auth.user) {
        return null
    }

    return (
        <Menu>
            <MenuTrigger
                className='flex w-full items-center justify-between rounded-lg p-2 transition hover:bg-sidebar-accent'
                aria-label='Profile'
            >
                <div className='flex items-center gap-x-2'>
                    <UserInfo user={auth.user} />
                </div>
                <IconChevronsUpDown
                    className='in-data-[collapsible=dock]:hidden'
                    data-slot='chevron'
                />
            </MenuTrigger>
            <MenuContent
                className='in-data-[sidebar-collapsible=collapsed]:min-w-56 min-w-(--trigger-width)'
                placement='bottom right'
            >
                <UserMenuContent user={auth.user} />
            </MenuContent>
        </Menu>
    )
}
