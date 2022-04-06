import { FunctionComponent } from 'react'

import { ContentSection, RequestDemoForm, BlockquoteWithLogoTop } from '@components'
import { stringToKebabCase } from '@util'

import { CaseStudyJumbotron } from './CaseStudyJumbotron'

interface Quote {
    text: string
    author: string
}

interface Logo {
    img: string
    href: string
}

interface Props {
    customer: string
    title: string
    logo?: Logo
    quote?: Quote
    pdf?: string
    heroImage?: string
    heroLink?: string
    className?: string
    titleClassName?: string
    children?: React.ReactNode
}

export const NewCaseStudyLayout: FunctionComponent<Props> = ({
    customer,
    title,
    logo,
    quote = null,
    className = 'case-study',
    pdf,
    children,
}) => (
    <>
        <div className={`${stringToKebabCase(customer)}-${className} ${className}`}>
            <CaseStudyJumbotron className="bg-gradient-onahau-fog text-black height-md-450 height-auto p-2" customer={customer} color="white">
                <h1 className="pt-5 pb-6 display-2 font-weight-bold mw-600 mx-auto">
                    {title}
                </h1>
                {pdf && (
                    <a href={pdf} className="btn btn-primary mt-3" rel="nofollow noreferrer noopener" target="_blank">
                        <i className="fa fa-file-pdf pr-2" />
                        Download PDF
                    </a>
                )}
            </CaseStudyJumbotron>

            {quote && (
                <ContentSection color="white" className="py-6 text-center mw-600">
                    <BlockquoteWithLogoTop
                        quote={quote.text}
                        author={quote.author}
                        logoHref={logo?.href}
                        logoAlt={customer}
                        logoImage={logo?.img}
                    />
                </ContentSection>
            )}

            {children}
        </div>

        <RequestDemoForm />
    </>
)
