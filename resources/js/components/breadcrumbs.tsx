import { Fragment } from 'react'
import { Breadcrumbs as _Breadcrumbs, BreadcrumbsItem } from '@/components/ui/breadcrumbs'
import { toUrl } from '@/lib/utils'
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types'

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: BreadcrumbItemType[] }) {
    return (
        <>
            {breadcrumbs.length > 0 && (
                <_Breadcrumbs items={breadcrumbs}>
                    {breadcrumbs.map((item, index) => {
                        const isLast = index === breadcrumbs.length - 1
                        return (
                            <Fragment key={index}>
                                {isLast ? (
                                    <BreadcrumbsItem>{item.title}</BreadcrumbsItem>
                                ) : (
                                    <BreadcrumbsItem href={toUrl(item.href)}>
                                        {item.title}
                                    </BreadcrumbsItem>
                                )}
                            </Fragment>
                        )
                    })}
                </_Breadcrumbs>
            )}
        </>
    )
}
