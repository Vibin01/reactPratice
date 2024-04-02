import PropTypes from "prop-types"

export const ArrayComponent = (props) => {
    const {items}=props;
  return (
    <div>
        <h2>
            <ul>
                {items.map((item) =>(
                    <li key={item.id}>{item.names}</li>
                ))}
            </ul>
        </h2>
    </div>
  );
};
ArrayComponent.propTypes={
    items:PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.number.isRequired,
    })).isRequired
};
