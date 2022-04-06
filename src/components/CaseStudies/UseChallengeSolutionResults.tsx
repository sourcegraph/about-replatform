import { FunctionComponent } from 'react'

import ChartBarIcon from 'mdi-react/ChartBarIcon'
import CheckCircleOutlineIcon from 'mdi-react/CheckCircleOutlineIcon'
import ClipboardTextOutlineIcon from 'mdi-react/ClipboardTextOutlineIcon'
import FlagOutlineIcon from 'mdi-react/FlagOutlineIcon'
import Link from 'next/link'

interface TextLink {
    text: string
    href?: string
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
                            {useCases.map((useCase, index) => (
                                <li key={index}>
                                    {useCase?.href ? (
                                        <Link href={(useCase as TextLink).href}>
                                            {(useCase as TextLink).text}
                                        </Link>
                                        ) : <span>{useCase}</span>
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
                            {challenges.map((challenge, index) => (
                                <li key={index}>
                                    {challenge?.href ? (
                                        <Link href={(challenge as TextLink).href}>
                                            {(challenge as TextLink).text}
                                        </Link>
                                        ) : <span>{challenge}</span>
                                    }
                                </li>
                            ))}
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
                            {solutions.map((solution, index) => (
                                <li key={index}>
                                    {solution?.href ? (
                                        <Link href={(solution as TextLink).href}>
                                            {(solution as TextLink).text}
                                        </Link>
                                        ) : <span>{solution}</span>
                                    }
                                </li>
                            ))}
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
                            {results.map((result, index) => (
                                <li key={index}>
                                    {result?.href ? (
                                        <Link href={(result as TextLink).href}>
                                            {(result as TextLink).text}
                                        </Link>
                                        ) : <span>{result}</span>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </section>
)
