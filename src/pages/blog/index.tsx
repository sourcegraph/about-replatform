import Link from 'next/link'
import { FunctionComponent } from 'react'

const BlogHome: FunctionComponent = () => (
    <div>
        Home
        <div>
            <Link href="/blog/integration-testing">Post</Link>
        </div>
    </div>
)

export default BlogHome
