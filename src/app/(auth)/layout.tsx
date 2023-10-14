const AuthLayouts = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="bg-sky-400 flex items-center justify-center h-screen">
            {children}
        </div>
    );
}
 
export default AuthLayouts;