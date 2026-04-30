import { Form, Head } from '@inertiajs/react'
import InputError from '@/components/input-error'
import PasswordInput from '@/components/password-input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/field'
import { Loader } from '@/components/ui/loader'
import { TextField } from '@/components/ui/text-field'
import { store } from '@/routes/password/confirm'

export default function ConfirmPassword() {
    return (
        <>
            <Head title='Confirm password' />

            <Form {...store.form()} resetOnSuccess={['password']}>
                {({ processing, errors }) => (
                    <div className='space-y-6'>
                        <TextField
                            id='password'
                            name='password'
                            autoComplete='current-password'
                            autoFocus
                        >
                            <Label>Password</Label>
                            <PasswordInput placeholder='Password' />

                            <InputError message={errors.password} />
                        </TextField>

                        <div className='flex items-center'>
                            <Button
                                className='w-full'
                                type='submit'
                                isPending={processing}
                                data-test='confirm-password-button'
                            >
                                {processing && <Loader />}
                                Confirm password
                            </Button>
                        </div>
                    </div>
                )}
            </Form>
        </>
    )
}

ConfirmPassword.layout = {
    title: 'Confirm your password',
    description:
        'This is a secure area of the application. Please confirm your password before continuing.',
}
