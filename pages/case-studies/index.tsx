import path from 'path'

import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import { getAllPages } from '@lib'
import { slugToTitleCase } from '@util'

interface CaseStudiesHomeProps {
    slugs: string[]
}

const CaseStudiesHome: FunctionComponent<CaseStudiesHomeProps> = ({ slugs }) => (
    <>
        <div>
            <div>
                {slugs.map((slug: string) => (
                    <div key={slug} >
                        <Link href={`/case-studies/${slug}`} passHref={true}>
                            {slugToTitleCase(slug)}   
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
)

export const getStaticProps: GetStaticProps<CaseStudiesHomeProps> = async ({ preview = false }) => {
    const slugs = await getAllPages(path.join(process.cwd(), 'pages/case-studies'))

    return {
        props: {
            slugs,
            preview,
        },
    }
}

export default CaseStudiesHome