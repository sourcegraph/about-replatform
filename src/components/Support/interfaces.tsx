/**
 * The features to display for support plans.
 */
 export interface SupportFeatures {
    communitySupport: boolean,
    emailSupport: boolean,
    workingHoursSupport: boolean,
    responseTime48: boolean,
    responseTime24: boolean,
    uptime: boolean,
    implementationSupport: boolean,
    sharedSlackChannel: boolean,
    customerEngineer: boolean
}

export interface SupportFeatureInfo {
    id: number,
    description: string
}
