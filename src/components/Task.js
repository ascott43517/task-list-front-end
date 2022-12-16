import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);
  // const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  const OnCompleteTask = () => {
    const CompletedTask = {
        id: props.id,
        title: props.title,
        isComplete: !props.isComplete

    };

    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateStudentData" in App
   props.onComplete(CompletedTask);
  
};
const completeValue = props.isComplete ? 'tasks__item__toggle--completed':'';

  return (
    <li className="tasks__item">
      <button className={`tasks__item__toggle ${completeValue}`}
        onClick= {OnCompleteTask}>
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};


Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default Task;


// testing 123
// onClick={() => props.OnCompleteTask(!complete)}
// 'tasks__item__toggle--completed' : '';
// `tasks__item__toggle ${completeValue}`