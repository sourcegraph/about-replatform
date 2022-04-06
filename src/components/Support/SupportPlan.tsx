import { ReactFragment, FunctionComponent } from 'react'

import { SupportFeatures, SupportFeatureInfo } from './interfaces'
import { SupportPlanFeature } from './SupportPlanFeature'

const FEATURE_INFO: Record<keyof SupportFeatures, SupportFeatureInfo> = {
    communitySupport: {
        id: 0,
        description: 'Community support on our public issue tracker',
    },
    emailSupport: {
        id: 1,
        description: 'Email support',
    },
    workingHoursSupport: {
        id: 2,
        description: 'Support during working hours (all North American timezones)',
    },
    responseTime24: {
        id: 3,
        description: '24 hour response time* to critical issues',
    },
    responseTime48: {
        id: 4,
        description: '48 hour response time* to critical issues',
    },
    uptime: {
        id: 5,
        description: '99.5% uptime (managed instances only)',
    },
    implementationSupport: {
        id: 6,
        description: 'Initial implementation support on architecture, deployment, configuration, and rollout',
    },
    sharedSlackChannel: {
        id: 7,
        description: 'Shared Slack channel for feedback and communication (available)',
    },
    customerEngineer: {
        id: 8,
        description: 'Dedicated customer engineer assigned to you (available)',
    },
}

const FEATURE_ORDER: (keyof SupportFeatures)[] = [
    'communitySupport',
    'emailSupport',
    'workingHoursSupport',
    'responseTime24',
    'responseTime48',
    'uptime',
    'implementationSupport',
    'sharedSlackChannel',
    'customerEngineer',
]

interface Props {
    className?: string

    name: string
    planProperties: ReactFragment
    features: SupportFeatures

    buttonLabel: string
    buttonClassName: string
    buttonOnClick?: () => void
    buttonHref: string
}

/**
 * A support plan on the Support page.
 */
export const SupportPlan: FunctionComponent<Props> = ({
    className = '',

    name,
    features,

    buttonLabel,
    buttonClassName,
    buttonOnClick,
    buttonHref,
}) => {
    const button = (
        <a
            className={`pricing-plan__button btn ${buttonClassName} w-100 mx-auto my-0 justify-content-center text-center d-flex`}
            href={buttonHref}
            onClick={buttonOnClick}
        >
            {buttonLabel}
        </a>
    )

    return (
        <div className={`pricing-plan card ${className}`}>
            <h2 className="card-title mt-3 mb-1 text-center pricing-plan__title">{name}</h2>
            <div className="card-body pt-3 text-center d-flex flex-column align-items-center">
                {button}
            </div>
            <ol className="pricing-plan__features list-group list-group-flush py-3">
                {FEATURE_ORDER.map(feature => (
                    <div key={FEATURE_INFO[feature].description}>
                        <SupportPlanFeature
                            info={FEATURE_INFO[feature]}
                            offered={features[feature]}
                            tag="li"
                            className="list-group-item bg-transparent border-0 px-0"
                        />
                    </div>
                ))}
            </ol>
        </div>
    )
}
