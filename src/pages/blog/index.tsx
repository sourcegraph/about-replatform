import path from 'path'

import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import { GetStaticProps } from 'next'

import { BlogHeadLinks, PostsListPage, BLOG_TYPE_TO_INFO } from '@components'
import { BlogType, Post, PostIndexComponentProps } from '@interfaces/posts'
import { getSortedSlugs, loadMarkdownFile, getMarkdownFiles } from '@lib'

const CONTENT_PARENT_DIRECTORY = './content/'

const BlogHome: FunctionComponent<PostIndexComponentProps> = ({ posts, allPosts }) => (
    <PostsListPage blogInfo={BLOG_TYPE_TO_INFO[BlogType.Blog]} posts={posts} allPosts={allPosts}>
        <div className="d-flex flex-column align-items-center">
            <BlogHeadLinks />
        </div>
    </PostsListPage>
)

export default BlogHome

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allSlugs = await getSortedSlugs('blogposts')
    if (!allSlugs) {
        return { notFound: true }
    }
    const files = await getMarkdownFiles()
    if (!files) {
        return { notFound: true }
    }
    const posts = await Promise.all(
        allSlugs.map(async slug => {
            const filePath = files.records[slug.slugPath].filePath
            const file = (await loadMarkdownFile(path.resolve(CONTENT_PARENT_DIRECTORY, filePath))) as Post
            const content = file.frontmatter.description ?? truncate(file.content, { length: 300 })
            return { frontmatter: file.frontmatter, excerpt: content }
        })
    )

    return {
        props: {
            allPosts: posts,
            posts: posts.slice(0, 20),
            preview,
        },
    }
}
