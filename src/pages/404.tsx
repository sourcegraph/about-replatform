import SignDirectionIcon from 'mdi-react/SignDirectionIcon'
import React from 'react'

import { Layout } from '@components'

const Custom404: React.FunctionComponent = () => (
    <Layout className="bg-white">
        <div className="error-page text-dark">
            <div className="error-page__circle rounded-circle">
                <div className="error-page__icon">
                    <SignDirectionIcon />
                </div>
            </div>
            
            <h1>404: Not Found</h1>
            <p>Sorry, the requested URL was not found.</p>
        </div>
    </Layout>
)

export default Custom404
