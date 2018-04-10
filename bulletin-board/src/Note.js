import React from 'react';

class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <p>Learn React</p>
                <span>
                    <button>Edit</button>
                    <button>Remove</button>
                </span>
            </div>
        )
    }
}

export default Note;