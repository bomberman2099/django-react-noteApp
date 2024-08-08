import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as Arrow } from '../assets/arrow-left.svg';

const NotePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    let [note, setNote] = useState({ body: '' });

    useEffect(() => {
        getNote();
    }, [id]);

    let getNote = async () => {
        if (id === "new") return
        let response = await fetch(`http://127.0.0.1:8000/api/note/${id}`); 
        let data = await response.json();
        setNote(data);
    };

    let createNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/note/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    };
    let updateNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/note/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    };
    let deleteNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/note/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        navigate('/');
    }

    let handleSubmit = () => {
        if(id !=="new" && !note.body){
            deleteNote()
        } else if(id !=="new"){
            updateNote()
        } else if(id === 'new' && note !== null){
            createNote()
        }
        navigate('/');
    };

    let handleChange = (e) => {
        setNote({
            ...note,
            body: e.target.value,
        });
    };

    
    return (
        <div className='note'>
            <div className="note-header">
                <h3>
                    <Arrow onClick={handleSubmit} />
                </h3>
                {id !== 'new'? 
                    <button onClick={deleteNote}>Delete</button>
                    :
                    <button onClick={handleSubmit}>Done</button>
                }
            </div>
            <textarea
                onChange={handleChange}
                value={note.body}
            ></textarea>
        </div>
    );
};

export default NotePage;
