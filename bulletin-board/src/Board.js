import React from 'react';
import Note from './Note';

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <Note></Note>
            </div>
        )
    }
}

export default Board;