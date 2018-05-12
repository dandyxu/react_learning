import React from 'react';
import Note from './Note';
import FaPlus from 'react-icons/lib/fa/plus';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : [
                // {
                //     id : 0,
                //     note : 'Dandy'
                // },
                // {
                //     id : 1,
                //     note : 'Wenting'
                // },
                // {
                //     id : 2,
                //     note : 'Xu'
                // }
            ]
        }
        this.add = this.add.bind(this);
        this.eachNote = this.eachNote.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.nextID = this.nextID.bind(this);
    }

    add(text) {
        this.setState(preState => ({
            notes: [
                ...preState.notes,
                {
                    id: this.nextID(),
                    note: text
                }
            ]
        }))
    }

    nextID() {
        this.uniqueID = this.uniqueID || 0;
        return this.uniqueID++;
    }

    update(newText, i) {
        console.log('updating item at index', i, newText);
        this.setState(preState => ({
            notes: preState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }));
    }

    remove(id) {
        console.log('removing item at', id);
        this.setState(preState => ({
            notes: preState.notes.filter(note => note.id !== id)
        }));
    }

    eachNote (note, i) {
        return (
            <Note key={i}
                    index={i}
                    onChange={this.update}
                    onRemove={this.remove}>
                    {note.note}
            </Note>
        )
    }

    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.add.bind(null, "New Note")}
                                id="add">
                            <FaPlus />
                </button>
            </div>
        )
    }
}

export default Board;