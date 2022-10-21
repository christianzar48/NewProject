import "./error.css"
import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="errorRoot">
            <Link to="/homepage">
                <button>Homepage</button>
            </Link>
            <div className="error-container">
                <h1>Error 404 - Page not found!</h1>
            </div>
        </div>
    )
}

export default PageNotFound;