import { FunctionComponent } from 'react'

export const WhitePaperInContentImage: FunctionComponent<{
    src: string
    alt: string
    caption?: string
}> = ({ src, caption, alt }) => (
    <p>
        <img src={src} className="white-papers__img" alt={alt} />
        {caption && <footer className="blockquote-footer">{caption}</footer>}
    </p>
)
