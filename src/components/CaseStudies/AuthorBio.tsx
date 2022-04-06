export const AuthorBio: React.FunctionComponent<{
    customer: string
    image?: string
    author: string
    title: string
    about: string
}> = ({ customer, image, author, title, about }) => (
    <div className="d-flex flex-md-row flex-column align-items-center align-items-md-start container-xl py-6 py-md-8">
        {image && (
            <div className="col-md-3 col-xl-2 text-center text-md-right">
                <img className="rounded-circle p-1" style={{ border: '3px solid #00A1C7' }} src={image} alt={author} />
            </div>
        )}
        <div className="col-md-4 col-xl-3 text-center text-md-left">
            <h5 className="font-weight-bold pt-5">{author}</h5>
            <p>{title}</p>
        </div>
        <div className="col-md-5 col-xl-6 mr-xl-0 mx-md-auto text-center text-md-left">
            <h5 className="font-weight-bold pt-5">About {customer}</h5>
            <p>{about}</p>
        </div>
    </div>
)
