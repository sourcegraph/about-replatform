import Link from 'next/link'
import { FunctionComponent } from 'react'

import { BlogType } from '@interfaces/posts'

import { BLOG_TYPE_TO_INFO } from './postTypes'

export const BlogHeadLinks: FunctionComponent = () => (
    <p>
        <span className="font-weight-bold pr-2">Past liveblogs:</span>
        <Link href={BLOG_TYPE_TO_INFO[BlogType.StrangeLoop].baseUrl}>Strange Loop</Link> •{' '}
        <Link href={BLOG_TYPE_TO_INFO[BlogType.GopherCon].baseUrl}>GopherCon and dotGo</Link> •{' '}
        <Link href={BLOG_TYPE_TO_INFO[BlogType.GraphQLSummit].baseUrl}>GraphQL Summit</Link> •{' '}
        <Link href={BLOG_TYPE_TO_INFO[BlogType.GitHubUniverse].baseUrl}>GitHub Universe</Link>
    </p>
)
