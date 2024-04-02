import PropTypes from "prop-types"

export const FunctionSample = (props) => {
    const {handleClick}=props
  return (
    <div>
        <p>This is a fucntion Component
        </p>
        <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
FunctionSample.propType={
    handleClick:PropTypes.func.isRequired
}
