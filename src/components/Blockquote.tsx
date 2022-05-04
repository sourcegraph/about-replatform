import { FunctionComponent, ReactFragment } from 'react'

import classNames from 'classnames'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

export const Blockquote: FunctionComponent<{
    quote: string
    author?: string | ReactFragment
    logoImage?: string
    logoAlt?: string
    border?: boolean
    headline?: string
    link?: string
    linkText?: string
}> = ({ quote, author, logoImage, border, headline, logoAlt, link, linkText }) => (
    <>
        <blockquote
            className={
                border
                    ? classNames('px-3 text-center mt-6 mb-5 border-vermillion case-studies__quote--border')
                    : classNames('p-3 text-center bg-light')
            }
        >
            {border && headline ? (
                <div className="">
                    <h4 className="font-weight-bold mb-4">{headline}</h4>
                    <h5 className="font-weight-normal">&ldquo;{quote}&rdquo;</h5>
                </div>
            ) : (
                <h3 className="font-weight-normal">&ldquo;{quote}&rdquo;</h3>
            )}
            {author && <figcaption className="text-center text-muted pt-4">&mdash; {author}</figcaption>}
        </blockquote>

        {logoImage && logoAlt && (
            <div className="d-flex justify-content-center">
                <img src={logoImage} width="110px" alt={logoAlt} />
            </div>
        )}
        {linkText && link && link.includes('http') && (
            <a href={link} target="_blank" rel="nofollow noopener noreferrer">
                {linkText}
            </a>
        )}
        {linkText && link && !link.includes('http') && (
            <Link href={link} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="d-flex justify-content-center mt-3">
                    <p className="font-weight-bold">{linkText}</p>
                    <ArrowRightIcon className="icon-inline ml-1" />
                </a>
            </Link>
        )}
    </>
)

export const BlockquoteWithLogoBottom: FunctionComponent<{
    quote: string
    header?: string
    author?: string | ReactFragment
    logoHref?: string
    logoImage?: string
    logoAlt?: string
    linkText?: string
    link?: string
}> = ({ quote, header, author, logoHref, logoImage, linkText, link, logoAlt }) => (
    <>
        {header && <h1 className="font-weight-bold">{header}</h1>}
        <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
            <h4 className="font-weight-normal">&ldquo;{quote}&rdquo;</h4>
            {author && <figcaption className="pt-3 text-muted text-center">&mdash; {author}</figcaption>}
        </blockquote>
        {logoImage && logoAlt && (
            <div className="d-flex justify-content-center">
                {logoHref ? (
                    <a href={logoHref} className="btn">
                        <img src={logoImage} width="110px" alt={logoAlt} />
                    </a>
                ) : (
                    <img src={logoImage} width="110px" alt={logoAlt} />
                )}
            </div>
        )}
        {linkText && link && link.includes('http') && (
            <a href={link} target="_blank" rel="nofollow noreferrer">
                {linkText}
                <ArrowRightIcon className="icon-inline ml-1" />
            </a>
        )}
        {linkText && link && !link.includes('http') && (
            <Link href={link} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="d-flex justify-content-center mt-3">
                    <p className="font-weight-bold">{linkText}</p>
                    <ArrowRightIcon className="icon-inline ml-1" />
                </a>
            </Link>
        )}
    </>
)

export const BlockquoteWithLogoTop: FunctionComponent<{
    quote: string
    author?: string | ReactFragment
    logoHref?: string
    logoImage?: string
    logoAlt?: string
}> = ({ quote, author, logoHref, logoImage, logoAlt }) => (
    <>
        {logoImage && logoAlt && (
            <div className="d-flex justify-content-center">
                {logoHref ? (
                    <a href={logoHref} className="btn">
                        <img src={logoImage} width="150px" alt={logoAlt} />
                    </a>
                ) : (
                    <img src={logoImage} width="150px" alt={logoAlt} />
                )}
            </div>
        )}
        <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
            <h2 className="display-3 font-weight-bold">&ldquo;{quote}&rdquo;</h2>
            {author && <figcaption className="pt-3 text-muted text-center">&mdash; {author}</figcaption>}
        </blockquote>
    </>
)

export const BlockquoteWithBorder: FunctionComponent<{
    quote: string
    author?: string | ReactFragment
    logoImage?: string
    logoAlt?: string
    headline?: string
    linkText?: string
    link?: string
    bold?: boolean
}> = ({ quote, author, logoImage, headline, logoAlt, link, linkText, bold }) => (
    <>
        <blockquote className="p-3 rounded rounded-lg text-center case-studies__quote--in-content">
            <div className="case-studies__quote--in-content--section">
                {headline && <h5 className="font-weight-bold mb-4">{headline}</h5>}
                <div className={bold ? 'font-weight-bold mb-3' : 'font-weight-normal mb-3'}>&ldquo;{quote}&rdquo;</div>
            </div>
            {author && (
                <>
                    <figcaption className="text-center text-muted">&mdash; {author}</figcaption>
                </>
            )}
        </blockquote>
        {logoImage && logoAlt && (
            <div className="d-flex justify-content-center">
                <img src={logoImage} width="110px" alt={logoAlt} />
            </div>
        )}
        {linkText && link && link.includes('http') && (
            <a href={link} target="_blank" rel="nofollow noreferrer">
                {linkText}
                <ArrowRightIcon className="icon-inline ml-1" />
            </a>
        )}
        {linkText && link && !link.includes('http') && (
            <Link href={link} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="d-flex justify-content-center mt-3">
                    <p className="font-weight-bold">{linkText}</p>
                    <ArrowRightIcon className="icon-inline ml-1" />
                </a>
            </Link>
        )}
    </>
)
