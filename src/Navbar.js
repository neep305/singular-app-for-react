const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Singular React App</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#03A9F4',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar;