const Error = ({ children }) => {
    return (
        <div className='bg-red-600 text-white text-center px-3 py-2 mb-2 rounded-md font-bold animate__animated animate__bounceIn'>
            {children}
        </div>
    );
};

export default Error;
