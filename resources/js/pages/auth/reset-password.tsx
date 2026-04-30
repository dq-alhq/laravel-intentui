import { Form, Head } from '@inertiajs/react'
import InputError from '@/components/input-error'
import PasswordInput from '@/components/password-input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Loader } from '@/components/ui/loader'
import { TextField } from '@/components/ui/text-field'
import { update } from '@/routes/password'

type Props = {
    token: string
    email: string
}

export default function ResetPassword({ token, email }: Props) {
    return (
        <>
            <Head title='Reset password' />

            <Form
                {...update.form()}
                transform={(data) => ({ ...data, token, email })}
                resetOnSuccess={['password', 'password_confirmation']}
            >
                {({ processing, errors }) => (
                    <div className='grid gap-6'>
                        <TextField
                            id='email'
                            type='email'
                            name='email'
                            autoComplete='email'
                            value={email}
                            className='mt-1 block w-full'
                            isReadOnly
                        >
                            <Label>Email</Label>
                            <Input />
                            <InputError message={errors.email} />
                        </TextField>

                        <TextField
                            id='password'
                            name='password'
                            autoComplete='new-password'
                            className='mt-1 block w-full'
                            autoFocus
                        >
                            <Label>Password</Label>
                            <PasswordInput placeholder='Password' />
                            <InputError message={errors.password} />
                        </TextField>

                        <TextField
                            id='password_confirmation'
                            name='password_confirmation'
                            autoComplete='new-password'
                            className='mt-1 block w-full'
                        >
                            <Label>Confirm password</Label>
                            <PasswordInput placeholder='Confirm password' />
                            <InputError message={errors.password_confirmation} className='mt-2' />
                        </TextField>

                        <Button
                            type='submit'
                            className='mt-4 w-full'
                            isPending={processing}
                            data-test='reset-password-button'
                        >
                            {processing && <Loader />}
                            Reset password
                        </Button>
                    </div>
                )}
            </Form>
        </>
    )
}

ResetPassword.layout = {
    title: 'Reset password',
    description: 'Please enter your new password below',
}
