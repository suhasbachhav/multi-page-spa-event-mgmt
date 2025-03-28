import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    const error = useRouteError();

    let title = "An error Occured";
    let message = "Something went wrong";

    if(error.status === 500){
        message = JSON.parse(error.data).message;
    }

    if(error.status === 5000){
        title = 'Not Found';
        message = 'Could not find the results';
    }
    return ( 
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
     );
}

export default ErrorPage;