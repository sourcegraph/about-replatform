import { FunctionComponent } from 'react'

export const WhitePaperInContentBlockquote: FunctionComponent<{
    quote: string
    author?: string
}> = ({ quote, author }) => (
    <blockquote className="blockquote white-papers__quote white-papers__quote--in-content">
        <p>{quote}</p>
        {author && <footer className="blockquote-footer">{author}</footer>}
    </blockquote>
)
