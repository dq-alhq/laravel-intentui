import { usePage } from '@inertiajs/react'
import { IconBookOpen, IconFolder, IconGrid4 } from '@intentui/icons'
import { useEffect } from 'react'
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
    NavbarLabel,
    NavbarMobile,
    NavbarSection,
    NavbarSpacer,
    NavbarStart,
    NavbarTrigger,
    useNavbar,
} from '@/components/ui/navbar'
import { UserMenuContent } from '@/components/user-menu-content'
import { initials, toUrl } from '@/lib/utils'
import type { BreadcrumbItem, NavItem } from '@/types'

const navigations = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: IconGrid4,
    },
]

const rightNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: IconFolder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: IconBookOpen,
    },
]

export function AppHeader({
    children,
    breadcrumbs = [],
    ...props
}: React.ComponentProps<typeof Navbar> & { breadcrumbs?: BreadcrumbItem[] }) {
    const page = usePage()
    const { auth } = usePage().props
    const { open, setOpen, isMobile } = useNavbar()
    useEffect(() => {
        if (open && isMobile) {
            setOpen(false)
        }
    }, [page.url])
    return (
        <>
            <Navbar intent='float' {...props}>
                <NavbarStart>
                    <Link className='flex items-center gap-3' href='/' aria-label='Goto homepage'>
                        <AppLogo />
                    </Link>
                </NavbarStart>
                <NavbarGap />

                <NavbarSection>
                    {navigations.map((item) => (
                        <NavbarItem
                            isCurrent={item.href === page.url}
                            key={toUrl(item.href)}
                            href={toUrl(item.href)}
                        >
                            {item.icon && <item.icon />}
                            <NavbarLabel>{item.title}</NavbarLabel>
                        </NavbarItem>
                    ))}
                    {rightNavItems.map((item) => (
                        <NavbarItem
                            key={toUrl(item.href)}
                            href={toUrl(item.href)}
                            isCurrent={item.href === page.url}
                        >
                            {item.icon && <item.icon />}
                            <NavbarLabel>{item.title}</NavbarLabel>
                        </NavbarItem>
                    ))}
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
                                    size='md'
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
                                    size='md'
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
        </>
    )
}
