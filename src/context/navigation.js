import { createContext, useEffect, useState } from "react";


const NavigationContext = createContext();
function NavigationProvider({ children }) {
    console.log('function called');
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        console.log('useEffect');
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', handler);
        return (() => {
            window.removeEventListener('popstate', handler);
        })
    }, [])
    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }
    return (
        <NavigationContext.Provider value={{}}>
            <button onClick={() => navigate('/dropdown')}>Dropdown</button>
            <button onClick={() => navigate('/accordion')}>Accordion</button>
            {children}
        </NavigationContext.Provider>
    )
}

export { NavigationProvider };
export default NavigationContext;