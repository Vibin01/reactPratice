
import PropTypes from 'prop-types';

export const Student =(props)=>{
    return (
        <div className="student">
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <td>{props.names}</td>
                </tr>
                <tr>
                <th>Age</th>
                <td>
                    {props.age}
                </td>
                </tr>
                    <tr><th>Ismarried</th>
                    <td>{props.isMarried?'yes':"no"}</td></tr>
                    
                    </tbody>
            </table>
        </div>
    )
    
}
Student.propTypes={
    names:PropTypes.string,
    age:PropTypes.number,
    isMarried:PropTypes.bool,
};
Student.defaultProps={
 names:"No Name",
 age: 0,
 isMarried: false,
};
