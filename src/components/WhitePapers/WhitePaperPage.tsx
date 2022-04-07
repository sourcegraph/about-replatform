import { FunctionComponent, ReactNode } from 'react'

import { WhitePaperJumbotron } from './WhitePaperJumbotron'

interface Quote {
    quote: string
    author: string
    image?: string
}

interface Props {
    title: string
    quote?: Quote
    pdf?: string
    className?: string
    titleClassName?: string
    children?: ReactNode
    bgImage?: string
}

export const WhitePaperPage: FunctionComponent<Props> = ({
    title,
    className,
    titleClassName,
    pdf,
    children,
    bgImage,
}) => (
    <div className={className}>
        <WhitePaperJumbotron className="text-light" bgImage={bgImage}>
            <h1 className={titleClassName}>{title}</h1>
            {pdf && (
                <a href={pdf} className="btn btn-primary mt-4" rel="noreferrer nofollow" target="_blank">
                    <i className="fa fa-file-pdf pr-2" />
                    Download PDF
                </a>
            )}
        </WhitePaperJumbotron>
        {children}
    </div>
)
