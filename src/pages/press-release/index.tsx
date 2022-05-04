import path from 'path'

import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import { GetStaticProps } from 'next'

import { PostsListPage, BLOG_TYPE_TO_INFO } from '@components'
import { BlogType, Post, PostIndexComponentProps } from '@interfaces/posts'
import { getSortedSlugs, loadMarkdownFile, getMarkdownFiles } from '@lib'
import { convertExcerptMarkdown } from '@util'

const CONTENT_PARENT_DIRECTORY = './content/'

const PressReleaseHome: FunctionComponent<PostIndexComponentProps> = ({ posts, allPosts }) => (
    <>
        <PostsListPage blogInfo={BLOG_TYPE_TO_INFO[BlogType.PressRelease]} posts={posts} allPosts={allPosts} />
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col mt-5">
                    <h3>Media contact</h3>
                    press@sourcegraph.com
                </div>
            </div>
        </div>
    </>
)

export default PressReleaseHome

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allSlugs = await getSortedSlugs('press')
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
            const content = convertExcerptMarkdown(truncate(file.content, { length: 300 }))
            return { frontmatter: file.frontmatter, excerpt: content, slugPath: slug.slugPath }
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
// export const pageQuery = graphql`
//     query PressReleasePosts {
//         allMarkdownRemark(
//             filter: { fields: { blogType: { eq: "press" } } }
//             sort: { fields: [frontmatter___publishDate], order: DESC }
//         ) {
//             edges {
//                 node {
//                     frontmatter {
//                         title
//                         heroImage
//                         author
//                         tags
//                         publishDate(formatString: "MMMM D, YYYY")
//                         slug
//                         description
//                         published
//                     }
//                     html
//                     excerpt(pruneLength: 300)
//                     fields {
//                         slug
//                         permalink
//                         blogType
//                     }
//                 }
//             }
//         }
//     }
// `
