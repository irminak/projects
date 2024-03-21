import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <h2>Ooops an error occured!</h2>
                <p>Could not find this page.</p>
            </main>
        </>
    );
};

export default ErrorPage;
