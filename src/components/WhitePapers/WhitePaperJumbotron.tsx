import { FunctionComponent, ReactNode } from 'react'

interface Props {
    className?: string
    children?: ReactNode
    bgImage?: string
}

export const WhitePaperJumbotron: FunctionComponent<Props> = ({ className = '', children, bgImage }) => (
    <div
        className={`jumbotron rounded-0 min-h-250 d-flex align-items-center ${className}`}
        // eslint-disable-next-line react/forbid-dom-props
        style={
            bgImage
                ? {
                      backgroundImage: `url(${bgImage})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                  }
                : undefined
        }
    >
        <div className="container text-center py-5">
            <span className="d-block mt-1 text-uppercase font-weight-bold">white paper</span>
            {children}
        </div>
    </div>
)
