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
            <h2 className="text-center display-3 font-weight-bold">Results</h2>

            <div className="mb-5 d-flex flex-wrap justify-content-center">
                {results.map((result, index) => (
                    <div key={`result-${index + 1}-${result.subtitle}`} className="col-sm-12 col-md-4 text-center pt-5">
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
