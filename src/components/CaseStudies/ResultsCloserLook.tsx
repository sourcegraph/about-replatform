import { FunctionComponent } from 'react'

interface Result {
    subtitle: string
    description: string
}

interface Props {
    results: Result[]
}

export const ResultsCloserLook: FunctionComponent<Props> = ({ results }) => (
    <div className="bg-gradient-blue-mist py-lg-7 p-5">
        <section className="container-xl">
            <h2 className="text-center pb-5 display-3 font-weight-bold">Results</h2>
            
            {/* TODO: Make this a flex row wrap like CaseStudyCards */}
            <div className="mb-5 row">
                {results.map((result, index) => (
                    <div key={index} className="col-sm-12 col-md-4 text-center">
                        <h3 className="pb-3 font-weight-bold text-blue7">{result.subtitle}</h3>
                        <p className="max-w-md-400 max-w-lg-250 max-w-xl-250 mx-auto">
                            {result.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    </div>
)
