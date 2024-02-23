import classNames from "classnames";
import UseNavigation from "../hooks/use-navigation";
function Link({ to, children, className,activeClassName }) {
    const { navigate, currentPath } = UseNavigation();
    const classes = classNames('text-blue-500', className, currentPath===to && activeClassName);
    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }
    return (
        <a className={classes} href={to} onClick={handleClick}>{children }</a>
    )
}
export default Link;