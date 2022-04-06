import { FunctionComponent, ReactNode } from 'react'

export const WhitePaperJumbotron: FunctionComponent<{
    className?: string
    children?: ReactNode
}> = ({ className = '', children }) => (
    <div className={`jumbotron rounded-0 ${className}`}>
        <div className="container text-center pt-5 pb-3">
            <span className="white-papers__label d-block mt-1">white paper</span>
            {children}
        </div>
    </div>
)
