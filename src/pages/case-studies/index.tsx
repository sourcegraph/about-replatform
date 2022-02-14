import path from 'path'

import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import { getAllPages } from '@lib/index'
import { slugToTitleCase } from '@util/index'

interface CaseStudiesHomeProps {
    slugs: string[]
}

const CaseStudiesHome: FunctionComponent<CaseStudiesHomeProps> = ({ slugs }) => (
    <>
        <div>
            <div>
                {slugs.map((slug: string) => (
                    <div key={slug}>
                        <Link href={`/case-studies/${slug}`}>
                            <a>{slugToTitleCase(slug)}</a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
)

export const getStaticProps: GetStaticProps<CaseStudiesHomeProps> = async ({ preview = false }) => {
    const slugs = await getAllPages(path.join(process.cwd(), 'src/pages/case-studies'))

    return {
        props: {
            slugs,
            preview,
        },
    }
}

export default CaseStudiesHome
