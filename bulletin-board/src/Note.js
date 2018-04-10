import React from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';

class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <p>Learn React</p>
                <span>
                    <button id="edit"><FaPencil /></button>
                    <button id="remove"><FaTrash /></button>
                </span>
            </div>
        )
    }
}

export default Note;