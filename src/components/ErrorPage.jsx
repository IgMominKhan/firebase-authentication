import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
const err = useRouteError()

  return (<>
    <div className="flex items-center justify-center w-1/4 h-screen">
      <h1 className="text-7xl font-medium italic">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p><i>{err.statusText || err.message}</i></p>
    </div>
  </>)
}

export default ErrorPage;
