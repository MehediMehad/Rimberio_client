import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const naviget = useNavigate
    return (
        <>
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800 mt-44">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 dark:text-gray-400">
                        <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                        <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
                        <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
                        <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
                    </svg>
                    <p className="text-3xl">Oops! The page you&#39;re looking for doesn&#39;t exist.</p>
                    <NavLink to={naviget('/')} className="btn bg-[#011640] text-white font-bold text-xl mt-4">Go To Home Page</NavLink>	</div>
            </section>

        </>
    );
};

export default ErrorPage;