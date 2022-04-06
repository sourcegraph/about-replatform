import { FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'

import { SupportFeatureInfo } from './interfaces'

interface Props {
    info: SupportFeatureInfo
    offered: boolean
    tag: 'li'
    className?: string
}

export const SupportPlanFeature: FunctionComponent<Props> = ({
    info: { description },
    offered,
    tag: Tag = 'li',
    className = '',
}) =>
    offered ? (
        <Tag
            className={`list-group-item border-0 ${className} d-flex justify-content-between ${
                offered ? '' : 'pricing-plan-feature__value-false'
            }`}
        >
            <div>
                <CheckIcon
                    className={`icon-inline ${
                        offered ? 'support-plan-feature__icon-true' : 'support-plan-feature__icon-false'
                    }`}
                />{' '}
                {description}
            </div>
        </Tag>
    ) : null
