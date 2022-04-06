import { FunctionComponent } from 'react'

import ChartBarIcon from 'mdi-react/ChartBarIcon'
import CheckCircleOutlineIcon from 'mdi-react/CheckCircleOutlineIcon'
import ClipboardTextOutlineIcon from 'mdi-react/ClipboardTextOutlineIcon'
import FlagOutlineIcon from 'mdi-react/FlagOutlineIcon'
import Link from 'next/link'

interface TextLink {
    text: string
    link: string
}

interface Props {
    useCases: string[] | TextLink[]
    challenges: string[] | TextLink[]
    solutions: string[] | TextLink[]
    results: string[] | TextLink[]
}

export const UseChallengeSolutionResults: FunctionComponent<Props> = ({
    useCases,
    challenges,
    solutions,
    results,
}) => (
    <section className="d-flex flex-column flex-md-row">
        <div className="bg-light-gray-2 p-lg-6 p-md-5 px-1 py-5 col-sm-12 col-md-6">
            <section className="max-w-xl-550 ml-xl-auto">
                <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                    <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <ClipboardTextOutlineIcon color="#00A1C7" size={40} className="p-1" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Use case</h5>
                        <ul className="pl-4">
                            {useCases.map(case => (
                                <li>
                                    {case?.link ? (
                                        <Link href={case.link}>
                                            {case.text}
                                        </Link>
                                        ) : {case.text}
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                    <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <FlagOutlineIcon color="#00A1C7" size={40} className="p-1" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Challenge</h5>
                        <ul className="pl-4">
                            <li>
                                Inability to efficiently find all the instances of Log4j in their large
                                codebase.
                            </li>
                            <li>Lack of code-level clarity that vulnerabilities were completely resolved.</li>
                            <li>Uncertainty about the scope and impact of the Log4j vulnerability.</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                    <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <CheckCircleOutlineIcon color="#00A1C7" size={40} className="p-1" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Solution</h5>
                        <ul className="pl-4">
                            <li>
                                Able to quickly and efficiently find every instance of the Log4j vulnerability.
                            </li>
                            <li>Full confidence that all Log4j-vulnerable code was identified and resolved.</li>
                            <li>
                                Able to quickly validate that no known vulnerabilities exist in the codebase
                                prior to each release.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        <div className="bg-gradient-blue-mist p-lg-6 p-md-5 px-1 py-5 col-sm-12 col-md-6">
            <section className="max-w-xl-550">
                <div className="mb-5 ml-3 ml-lg-0 d-flex flex-column flex-md-row">
                    <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <ChartBarIcon color="#00A1C7" size={40} className="p-1" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Results</h5>
                        <ul className="pl-4">
                            <li>
                                Nutanix was able to see where JMSAppender existed, fix it, and send out a
                                release in less than 5 minutes.
                            </li>
                            <li>
                                Nutanix was able to deliver patches to its customers that fully remediated the
                                Log4j vulnerability in under 4 days.
                            </li>
                            <li>
                                Nutanix was able to identify every instance of Log4j across its sprawling
                                codebase with 100% confidence.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </section>
)
