import { IconEye, IconEyeClosed } from '@intentui/icons'
import type { ComponentProps, Ref } from 'react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export default function PasswordInput({
    className,
    ref,
    ...props
}: Omit<ComponentProps<'input'>, 'type'> & { ref?: Ref<HTMLInputElement> }) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div data-slot='control' className='relative'>
            <Input
                type={showPassword ? 'text' : 'password'}
                className={cn('pr-10', className)}
                ref={ref}
                {...props}
            />
            <button
                type='button'
                onClick={() => setShowPassword((prev) => !prev)}
                className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 text-muted-fg hover:text-fg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring'
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
            >
                {showPassword ? (
                    <IconEyeClosed className='size-4' />
                ) : (
                    <IconEye className='size-4' />
                )}
            </button>
        </div>
    )
}
