import { Heading as _Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
export default function Heading({
    title,
    description,
    variant = 'default',
}: {
    title: string
    description?: string
    variant?: 'default' | 'small'
}) {
    return (
        <header className={variant === 'small' ? '' : 'mb-8 space-y-0.5'}>
            <_Heading level={variant === 'small' ? 4 : 2}>{title}</_Heading>
            {description && <Text>{description}</Text>}
        </header>
    )
}
