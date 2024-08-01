export const BaseLayout = ({ header, sidebar, children }) => {
    return (
        <div className="app">
            {header}
            <div className="hero">
                {sidebar}
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}

