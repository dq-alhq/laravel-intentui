// Components
import { Form, Head } from '@inertiajs/react'
import InputError from '@/components/input-error'
import TextLink from '@/components/text-link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Loader } from '@/components/ui/loader'
import { TextField } from '@/components/ui/text-field'
import { login } from '@/routes'
import { email } from '@/routes/password'

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <>
            <Head title='Forgot password' />

            {status && (
                <div className='mb-4 text-center font-medium text-sm text-success'>{status}</div>
            )}

            <div className='space-y-6'>
                <Form {...email.form()}>
                    {({ processing, errors }) => (
                        <>
                            <TextField
                                id='email'
                                type='email'
                                name='email'
                                autoComplete='off'
                                autoFocus
                            >
                                <Label>Email address</Label>
                                <Input placeholder='email@example.com' />
                                <InputError message={errors.email} />
                            </TextField>

                            <div className='my-6 flex items-center justify-start'>
                                <Button
                                    className='w-full'
                                    isPending={processing}
                                    type='submit'
                                    data-test='email-password-reset-link-button'
                                >
                                    {processing && <Loader />}
                                    Email password reset link
                                </Button>
                            </div>
                        </>
                    )}
                </Form>

                <div className='space-x-1 text-center text-muted-foreground text-sm'>
                    <span>Or, return to</span>
                    <TextLink href={login()}>log in</TextLink>
                </div>
            </div>
        </>
    )
}

ForgotPassword.layout = {
    title: 'Forgot password',
    description: 'Enter your email to receive a password reset link',
}
