import { FunctionComponent, ReactNode } from 'react'

export const WhitePaperJumbotron: FunctionComponent<{
    className?: string
    children?: ReactNode
    bgImage?: string
}> = ({ className = '', children, bgImage }) => (
    <div
        className={`jumbotron rounded-0 ${className}`}
        // eslint-disable-next-line react/forbid-dom-props
        style={bgImage ? {
            backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        } : undefined}
    >
        <div className="container text-center py-5">
            <span className="white-papers__label d-block mt-1">white paper</span>
            {children}
        </div>
    </div>
)
