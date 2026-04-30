import { usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import AppLogo from '@/components/app-logo'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Avatar } from '@/components/ui/avatar'
import { Button, buttonStyles } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { Menu, MenuContent } from '@/components/ui/menu'
import {
    Navbar,
    NavbarGap,
    NavbarItem,
    NavbarMobile,
    NavbarProvider,
    NavbarSection,
    NavbarSpacer,
    NavbarStart,
    NavbarTrigger,
} from '@/components/ui/navbar'
import { UserMenuContent } from '@/components/user-menu-content'
import { initials } from '@/lib/utils'
import type { BreadcrumbItem } from '@/types'

const navigations = [
    {
        name: 'Home',
        textValue: 'Home',
        href: '/',
    },
]

export function AppHeader({
    children,
    breadcrumbs = [],
    ...props
}: React.ComponentProps<typeof Navbar> & { breadcrumbs?: BreadcrumbItem[] }) {
    const page = usePage()
    const { auth } = usePage().props
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => setIsOpen(false), [page.url])
    return (
        <NavbarProvider isOpen={isOpen} onOpenChange={setIsOpen}>
            <Navbar {...props}>
                <NavbarStart>
                    <Link href='/' aria-label='Goto homepage'>
                        <AppLogo />
                    </Link>
                </NavbarStart>
                <NavbarGap />

                <NavbarSection>
                    {navigations.map((item) => (
                        <NavbarItem
                            isCurrent={item.href === page.url}
                            key={item.href}
                            href={item.href}
                        >
                            {item.name}
                        </NavbarItem>
                    ))}
                    <NavbarItem
                        target='_blank'
                        href='https://intentui.com'
                        className='justify-between'
                    >
                        Documentation
                    </NavbarItem>
                    <NavbarItem target='_blank' href='https://design.intentui.com'>
                        Blocks
                    </NavbarItem>
                </NavbarSection>
                <NavbarSpacer />
                <NavbarSection className='ml-auto hidden gap-x-2 lg:flex'>
                    {auth.user ? (
                        <Menu>
                            <Button size='sq-md' intent='plain' isCircle aria-label='Open menu'>
                                <Avatar
                                    src={auth.user.avatar}
                                    alt={auth.user.name}
                                    initials={initials(auth.user.name)}
                                    size='sm'
                                />
                            </Button>
                            <MenuContent placement='bottom end' className='sm:min-w-56'>
                                <UserMenuContent user={auth.user} />
                            </MenuContent>
                        </Menu>
                    ) : (
                        <>
                            <NavbarItem href='/login'>Login</NavbarItem>
                            <NavbarItem href='/register'>Register</NavbarItem>
                        </>
                    )}
                </NavbarSection>
            </Navbar>
            <NavbarMobile>
                <NavbarTrigger />
                <NavbarSpacer />
                <NavbarSection>
                    {auth.user ? (
                        <Menu>
                            <Button size='sq-md' intent='plain' isCircle aria-label='Open menu'>
                                <Avatar
                                    src={auth.user.avatar}
                                    alt={auth.user.name}
                                    initials={initials(auth.user.name)}
                                    size='sm'
                                />
                            </Button>
                            <MenuContent placement='bottom end' className='sm:min-w-56'>
                                <UserMenuContent user={auth.user} />
                            </MenuContent>
                        </Menu>
                    ) : (
                        <NavbarItem
                            className={buttonStyles({
                                intent: 'outline',
                                size: 'sm',
                            })}
                            href='/login'
                        >
                            Login
                        </NavbarItem>
                    )}
                </NavbarSection>
            </NavbarMobile>
            {breadcrumbs.length > 1 && (
                <div className='flex w-full border-sidebar-border/70 border-b'>
                    <div className='mx-auto flex h-12 w-full items-center justify-start px-4 md:max-w-7xl'>
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </NavbarProvider>
    )
}
