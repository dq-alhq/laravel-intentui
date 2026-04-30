import { Form } from '@inertiajs/react'
import { useRef } from 'react'
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController'
import Heading from '@/components/heading'
import InputError from '@/components/input-error'
import PasswordInput from '@/components/password-input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/field'
import {
    Modal,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
} from '@/components/ui/modal'
import { TextField } from '@/components/ui/text-field'

export default function DeleteUser() {
    const passwordInput = useRef<HTMLInputElement>(null)

    return (
        <div className='space-y-6'>
            <Heading
                variant='small'
                title='Delete account'
                description='Delete your account and all of its resources'
            />
            <div className='space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10'>
                <div className='relative space-y-0.5 text-danger dark:text-red-100'>
                    <p className='font-medium'>Warning</p>
                    <p className='text-sm'>Please proceed with caution, this cannot be undone.</p>
                </div>

                <Modal>
                    <Button intent='danger' data-test='delete-user-button'>
                        Delete account
                    </Button>
                    <ModalContent>
                        <ModalHeader>
                            <ModalTitle>Are you sure you want to delete your account?</ModalTitle>
                            <ModalDescription>
                                Once your account is deleted, all of its resources and data will
                                also be permanently deleted. Please enter your password to confirm
                                you would like to permanently delete your account.
                            </ModalDescription>
                        </ModalHeader>

                        <Form
                            {...ProfileController.destroy.form()}
                            options={{
                                preserveScroll: true,
                            }}
                            onError={() => passwordInput.current?.focus()}
                            resetOnSuccess
                            className='space-y-6'
                        >
                            {({ resetAndClearErrors, processing, errors }) => (
                                <>
                                    <TextField
                                        id='password'
                                        name='password'
                                        autoComplete='current-password'
                                    >
                                        <Label className='sr-only'>Password</Label>
                                        <PasswordInput ref={passwordInput} placeholder='Password' />
                                        <InputError message={errors.password} />
                                    </TextField>

                                    <ModalFooter className='gap-2'>
                                        <ModalClose onPress={() => resetAndClearErrors()}>
                                            Cancel
                                        </ModalClose>

                                        <Button
                                            data-test='confirm-delete-user-button'
                                            type='submit'
                                            intent='danger'
                                            isPending={processing}
                                        >
                                            Delete account
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </Form>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}
