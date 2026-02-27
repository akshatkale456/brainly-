import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
            <h1 className="text-6xl font-bold mb-4 text-gray-200">404</h1>
            <p className="text-2xl mb-8 text-gray-400">Content Not Found</p>
            <Link
                to="/"
                className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition duration-200"
            >
                Back to Home Page
            </Link>
        </div>
    );
};
