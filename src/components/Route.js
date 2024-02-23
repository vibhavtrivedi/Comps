import UseNavigation from "../hooks/use-navigation";

function Route({path, children}) {
    const { currentPath } = UseNavigation();
    
    if (currentPath === path) {
        return <div>{children}</div>
    }
    return null;
}
export default Route;