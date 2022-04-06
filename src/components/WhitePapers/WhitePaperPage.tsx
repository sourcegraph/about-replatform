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
    className = 'white-paper',
    titleClassName = '',
    pdf,
    children,
    bgImage,
}) => (
    <div
        className={className}
        // eslint-disable-next-line react/forbid-dom-props
        style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat' } : undefined}
    >
        <WhitePaperJumbotron className="text-light mb-5">
            <h1 className={`${titleClassName}`}>{title}</h1>
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
