import { Form, Head } from '@inertiajs/react'
import InputError from '@/components/input-error'
import PasswordInput from '@/components/password-input'
import TextLink from '@/components/text-link'
import { Button } from '@/components/ui/button'
import { Checkbox, CheckboxLabel } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Loader } from '@/components/ui/loader'
import { TextField } from '@/components/ui/text-field'
import { register } from '@/routes'
import { store } from '@/routes/login'
import { request } from '@/routes/password'

type Props = {
    status?: string
    canResetPassword: boolean
    canRegister: boolean
}

export default function Login({ status, canResetPassword, canRegister }: Props) {
    return (
        <>
            <Head title='Log in' />

            <Form {...store.form()} resetOnSuccess={['password']} className='flex flex-col gap-6'>
                {({ processing, errors }) => (
                    <>
                        <div className='grid gap-6'>
                            <TextField
                                id='email'
                                type='email'
                                name='email'
                                isRequired
                                autoFocus
                                autoComplete='email'
                            >
                                <Label>Email address</Label>
                                <Input placeholder='email@example.com' />
                                <InputError message={errors.email} />
                            </TextField>

                            <TextField
                                id='password'
                                name='password'
                                isRequired
                                autoComplete='current-password'
                            >
                                <div data-slot='label' className='flex items-center'>
                                    <Label>Password</Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className='ml-auto text-sm'
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <PasswordInput placeholder='Password' />
                                <InputError message={errors.password} />
                            </TextField>

                            <Checkbox id='remember' name='remember'>
                                <CheckboxLabel>Remember me</CheckboxLabel>
                            </Checkbox>

                            <Button
                                type='submit'
                                className='mt-4 w-full'
                                isPending={processing}
                                data-test='login-button'
                            >
                                {processing && <Loader />}
                                Log in
                            </Button>
                        </div>

                        {canRegister && (
                            <div className='text-center text-muted-foreground text-sm'>
                                Don't have an account?{' '}
                                <TextLink href={register()} tabIndex={5}>
                                    Sign up
                                </TextLink>
                            </div>
                        )}
                    </>
                )}
            </Form>

            {status && (
                <div className='mb-4 text-center font-medium text-sm text-success'>{status}</div>
            )}
        </>
    )
}

Login.layout = {
    title: 'Log in to your account',
    description: 'Enter your email and password below to log in',
}
