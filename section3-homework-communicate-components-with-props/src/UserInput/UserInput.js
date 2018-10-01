import React from 'react';

const UserInput = (props) => {
    const style = {
        border: '2px solid red',
    }
    return <input type="text"
    onChange = { props.change }
    value = { props.value }
    style = { style }/>;
};

export default UserInput;
