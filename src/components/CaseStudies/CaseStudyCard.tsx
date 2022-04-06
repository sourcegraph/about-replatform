import { FunctionComponent } from 'react'

import Link from 'next/link'

import styles from './CaseStudyCard.module.scss'

interface Props {
    name: string
    logo: string
    title: string
    url: string
}

export const CaseStudyCard: FunctionComponent<Props> = props => (
    <div className="card flex-grow-1">
        <div className="card-body">
            <img className={`${styles.logo} mb-2`} src={props.logo} alt={`${props.name} logo`} />
            <p className="card-text">
                {props.title}{' '}
                <span>
                    {props.url.includes('http') ? (
                        <a href={props.url} className="card-link" target="_blank" rel="nofollow noopener noreferrer">
                            Learn more.
                        </a>
                    ) : (
                        <Link href={props.url} passHref={true}>
                            <a href="#none" className="card-link">Learn more.</a>
                        </Link>
                    )}
                </span>
            </p>
        </div>
    </div>
)
