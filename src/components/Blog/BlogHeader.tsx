import Link from 'next/link'
import { FunctionComponent } from 'react'

import { BlogTypeInfo } from '@interfaces/posts'

interface Props extends Pick<BlogTypeInfo, 'title' | 'belowTitle' | 'baseUrl'> {}

export const BlogHeader: React.FunctionComponent<Props> = ({ title, belowTitle, baseUrl }) => (
    <div>
        <h1 className="display-4 mt-3">
            <Link href={baseUrl} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="text-body">{title}</a>
            </Link>
        </h1>
        {belowTitle}
    </div>
)
