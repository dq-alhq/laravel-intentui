import { Form, Head } from '@inertiajs/react'
import InputError from '@/components/input-error'
import PasswordInput from '@/components/password-input'
import TextLink from '@/components/text-link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Loader } from '@/components/ui/loader'
import { TextField } from '@/components/ui/text-field'
import { login } from '@/routes'
import { store } from '@/routes/register'

export default function Register() {
    return (
        <>
            <Head title='Register' />
            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className='flex flex-col gap-6'
            >
                {({ processing, errors }) => (
                    <>
                        <div className='grid gap-6'>
                            <TextField
                                id='name'
                                name='name'
                                isRequired
                                autoFocus
                                autoComplete='name'
                            >
                                <Label>Name</Label>
                                <Input placeholder='Full Name' />
                                <InputError message={errors.name} />
                            </TextField>

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
                                autoComplete='current-password'
                            >
                                <Label>Password</Label>

                                <PasswordInput placeholder='New password' />

                                <InputError message={errors.password} />
                            </TextField>

                            <TextField id='password_confirmation' name='password_confirmation'>
                                <Label>Confirm password</Label>

                                <PasswordInput placeholder='Confirm password' />

                                <InputError message={errors.password_confirmation} />
                            </TextField>

                            <Button
                                isPending={processing}
                                type='submit'
                                className='mt-2 w-full'
                                data-test='register-user-button'
                            >
                                {processing && <Loader />}
                                Create account
                            </Button>
                        </div>

                        <div className='text-center text-muted-foreground text-sm'>
                            Already have an account?{' '}
                            <TextLink href={login()} tabIndex={6}>
                                Log in
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </>
    )
}

Register.layout = {
    title: 'Create an account',
    description: 'Enter your details below to create your account',
}
