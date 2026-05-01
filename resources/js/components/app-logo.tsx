import AppLogoIcon from '@/components/app-logo-icon'

export default function AppLogo() {
    return (
        <>
            <div className='flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-fg'>
                <AppLogoIcon className='size-5 fill-current' />
            </div>
            <span className='font-medium'>{import.meta.env.VITE_APP_NAME}</span>
        </>
    )
}
