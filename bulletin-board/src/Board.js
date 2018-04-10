import React from 'react';
import Note from './Note';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : [
                {
                    id : 23,
                    note : 'Dandy'
                },
                {
                    id : 19,
                    note : 'Wenting'
                },
                {
                    id : 8,
                    note : 'Xu'
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this);
    }

    eachNote (note, i) {
        return (
            <Note key={i}
                    index={i}>
                    {note.note}
            </Note>
        )
    }

    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board;