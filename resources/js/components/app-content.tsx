import type * as React from 'react'
import { Container } from '@/components/ui/container'
import { SidebarInset } from '@/components/ui/sidebar'
import type { AppVariant } from '@/types'

type Props = React.ComponentProps<'main'> & {
    variant?: AppVariant
}

export function AppContent({ variant = 'sidebar', children, ...props }: Props) {
    if (variant === 'sidebar') {
        return <SidebarInset {...props}>{children}</SidebarInset>
    }

    return (
        <Container
            className='mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl'
            {...props}
        >
            {children}
        </Container>
    )
}
