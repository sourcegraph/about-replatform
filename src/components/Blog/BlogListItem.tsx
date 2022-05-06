import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import Link from 'next/link'

import { PostIndexItem } from '@interfaces/posts'
import { formatDate } from '@util'

/**
 * An index blog post item.
 */
export const BlogListItem: FunctionComponent<PostIndexItem> = ({
    frontmatter,
    excerpt,
    slugPath,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
}) => (
    <div className={`blog-post overflow-hidden pb-2 ${className}`}>
        <header className={headerClassName}>
            <h1 className={titleClassName}>
                <Link href={`/blog/${slugPath}`} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={`d-block ${titleLinkClassName}`}>{frontmatter.title}</a>
                </Link>
            </h1>
            {frontmatter.author && frontmatter.publishDate && (
                <p className="text-align-center text-secondary mb-0">
                    {frontmatter.author} on{' '}
                    <time dateTime={frontmatter.publishDate}>{formatDate(frontmatter.publishDate)}</time>
                </p>
            )}
        </header>
        {slugPath && (
            <div className="card-body pt-0 d-flex flex-card">
                <div className="flex-1 w-75">
                    {frontmatter.description ? (
                        <p>{truncate(frontmatter.description, { length: 300 })}</p>
                    ) : (
                        <p>{excerpt}</p>
                    )}
                    <Link href={`/blog/${slugPath}`} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="font-weight-bold">Read more</a>
                    </Link>
                </div>
                {frontmatter.heroImage && (
                    <Link href={`/blog/${slugPath}`} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>
                            <img
                                className="max-w-100 max-h-150 flex-1 max-w-250"
                                src={frontmatter.heroImage}
                                alt={frontmatter.title}
                            />
                        </a>
                    </Link>
                )}
            </div>
        )}
    </div>
)
