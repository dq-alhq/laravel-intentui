import type { Icon as IconType } from '@/types'

interface IconProps {
    iconNode?: IconType | null
    className?: string
}

export function Icon({ iconNode: IconComponent, className }: IconProps) {
    if (!IconComponent) {
        return null
    }

    return <IconComponent className={className} />
}
