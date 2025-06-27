import PropTypes from 'prop-types';

function Student(props) {
  return (
    <div className="p-4 max-w-md mx-auto bg-blue-100 rounded shadow">
      <p className="text-lg font-semibold">Name: {props.name}</p>
      <p className="text-lg">Age: {props.age}</p>
      <p className="text-lg">
        Student: <span className="font-bold">{props.isStudent ? "Yes" : "No"}</span>
      </p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "MAMU",
  age: 2,
  isStudent: false,
};

export default Student;
