import { FunctionComponent } from 'react'

import { ContentPage, RequestDemoAction } from '@components'

interface Props {
    title?: string
    description?: string
}

export const WhitePaperRequestDemoForm: FunctionComponent<Props> = ({
    title = 'See how Sourcegraph can help with a demo and free enterprise trial',
    description = 'Universal Code Search enables developers to explore and better understand all code, everywhere, faster. Let us show you how.',
}) => (
    <ContentPage
        title={title}
        description={description}
        mainActions={
            <div className="d-flex flex-column align-items-center">
                <RequestDemoAction className="mt-3" />
            </div>
        }
    />
)
