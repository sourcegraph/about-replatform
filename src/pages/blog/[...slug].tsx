import path from 'path'

import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Layout, BlogHeader } from '@components'
import { Post, POST_TYPE_TO_COMPONENT, postType, urlToPost } from '@interfaces/posts'
import { getMarkdownPages, loadMarkdownFile, serializeMdxSource } from '@lib'

import { BLOG_TYPE_TO_INFO } from '../../components/Blog/postTypes'

export interface PageProps {
    post: Post
    content: MDXRemoteSerializeResult
}

const CONTENT_PARENT_DIRECTORY = './content/blogposts'

const BlogPage: NextPage<PageProps> = ({ post, content }) => {
    const title = post.frontmatter.title
    const description = post.frontmatter.description ? post.frontmatter.description : post.excerpt
    const image = post.frontmatter.socialImage ?? 'https://about.sourcegraph.com/sourcegraph-mark.png'
    const canonical = post.frontmatter.canonical
    const externalTitle = post.frontmatter.externalTitle
    const externalDescription = post.frontmatter.externalDescription
    const meta = {
        title,
        image,
        description,
        externalTitle,
        externalDescription,
        canonical,
    }

    const blogInfo = BLOG_TYPE_TO_INFO[post.fields?.blogType ?? 'blog']
    const PostTemplate = POST_TYPE_TO_COMPONENT[postType(post)]

    return (
        <Layout meta={meta}>
            <div>
                <div className="container-lg">
                    <BlogHeader {...blogInfo} />
                </div>
                <div className="post-template mt-5 bg-white">
                    <div className="container-lg">
                        <PostTemplate
                            post={post}
                            content={content}
                            url={urlToPost(post)}
                            full={true}
                            className="post-template__post"
                            headerClassName="card-header bg-white border-bottom-0 text-center pt-5"
                            titleClassName=""
                            titleLinkClassName="post-template__post-title-link"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BlogPage

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getMarkdownPages(path.join(process.cwd(), CONTENT_PARENT_DIRECTORY))
    const slugs = paths.map(path => path.slugPath.split('/'))

    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    if (!params || !params.slug) {
        throw new Error('Missing slug')
    }
    const post = (await loadMarkdownFile(
        path.resolve(CONTENT_PARENT_DIRECTORY, `${(params.slug as string[]).join('/')}.md`)
    )) as Post
    const content = await serializeMdxSource(post.content)

    return {
        props: {
            post,
            content,
            preview,
        },
    }
}
