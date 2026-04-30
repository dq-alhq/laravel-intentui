import type { PropsWithChildren } from 'react'
import Heading from '@/components/heading'
import { Tab, TabList, Tabs } from '@/components/ui/tabs'
import { useCurrentUrl } from '@/hooks/use-current-url'
import { toUrl } from '@/lib/utils'
import { edit as editAppearance } from '@/routes/appearance'
import { edit } from '@/routes/profile'
import { edit as editSecurity } from '@/routes/security'
import type { NavItem } from '@/types'

const sidebarNavItems: NavItem[] = [
    {
        title: 'Profile',
        href: edit(),
        icon: null,
    },
    {
        title: 'Security',
        href: editSecurity(),
        icon: null,
    },
    {
        title: 'Appearance',
        href: editAppearance(),
        icon: null,
    },
]

export default function SettingsLayout({ children }: PropsWithChildren) {
    const { currentUrl } = useCurrentUrl()

    return (
        <div className='px-4 py-6'>
            <Heading title='Settings' description='Manage your profile and account settings' />

            <div className='space-y-6'>
                <Tabs aria-label='Setting Navigation' selectedKey={currentUrl}>
                    <TabList items={sidebarNavItems}>
                        {(item) => (
                            <Tab href={toUrl(item.href)} id={toUrl(item.href)}>
                                {item.title}
                            </Tab>
                        )}
                    </TabList>
                </Tabs>
                <div className='flex-1 md:max-w-2xl'>
                    <section className='max-w-xl space-y-12'>{children}</section>
                </div>
            </div>
        </div>
    )
}
