import type { Auth } from '@/types/auth';
import type { VisitOptions } from "@inertiajs/core"

declare module "react-aria-components" {
    interface RouterConfig {
        routerOptions: VisitOptions
    }
}
declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}
