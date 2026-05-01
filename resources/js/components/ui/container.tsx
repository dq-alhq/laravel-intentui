import { twMerge } from 'tailwind-merge'

export interface ContainerProps extends React.ComponentProps<'main'> {
    constrained?: boolean
}

export function Container({ className, constrained = false, ref, ...props }: ContainerProps) {
    return (
        <main
            className={twMerge(
                'mx-auto w-full max-w-(--container-breakpoint) [--container-breakpoint:var(--breakpoint-xl)] [--container-padding:--spacing(4)]',
                constrained ? 'sm:px-(--container-padding)' : 'px-(--container-padding)',
                className,
            )}
            {...props}
            ref={ref}
        />
    )
}
