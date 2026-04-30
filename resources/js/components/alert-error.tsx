import { Heading } from '@/components/ui/heading'
import { Note } from '@/components/ui/note'
import { Text } from '@/components/ui/text'

export default function AlertError({ errors, title }: { errors: string[]; title?: string }) {
    return (
        <Note intent='danger'>
            <Heading>{title || 'Something went wrong.'}</Heading>
            <Text>
                <ul className='list-inside list-disc text-sm'>
                    {Array.from(new Set(errors)).map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </Text>
        </Note>
    )
}
