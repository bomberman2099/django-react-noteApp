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
        let response = await fetch(`http://127.0.0.1:8000/api/note/${id}`);
        let data = await response.json();
        setNote(data);
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
        updateNote();
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
                <button onClick={deleteNote}>Delete</button>
            </div>
            <textarea
                onChange={handleChange}
                value={note.body}
            ></textarea>
        </div>
    );
};

export default NotePage;
