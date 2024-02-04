import propTypes from "prop-types";
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  return <button>{children}</button>;
}
Button.propTypes = {
  checkVariationValue: ({primary, secondary, success, danger, warning}) => {
    const count = Number(!!primary) +
      Number(!!secondary) + Number(!!warning) + Number(!!success)
      + Number(!!danger)
    if (count > 1) {
      return new Error("only one of primary, secondary, danger, warning, success can be true");
    }
  }
}
export default Button;
