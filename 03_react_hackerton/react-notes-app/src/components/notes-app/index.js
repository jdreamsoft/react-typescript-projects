import React  from "react";
import "./index.css";
import {useState, useEffect} from "react";

function NotesApp () {
  const [notes, setNotes] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteStatus, setNoteStatus] = useState("");
  const [tab, setTab] = useState(0);

  function addNote () {
    const new_note = {name: noteTitle, status:noteStatus};
    setAllNotes([...allNotes, new_note]);
    setNoteTitle("");
    setNoteStatus("");
  }

  useEffect(()=>{
    const activeNotes = allNotes.filter(x=>x.status.toLowerCase() === "active");
    const completeNotes = allNotes.filter(x=>x.status.toLowerCase() === "completed");
    const otherNotes = allNotes.filter(x=>x.status.toLowerCase() !== "completed" && x.status.toLowerCase() !== "active");
    if (tab === 1) {
      setNotes(activeNotes);
    } else if (tab === 2) {
      setNotes(completeNotes);
    } else {
      let all_notes = activeNotes.concat(completeNotes);
      all_notes = all_notes.concat(otherNotes);
      setNotes(all_notes)
    }
  },[allNotes, tab]);

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input data-testid="input-note-name" type="text" className="large mx-8"
              placeholder="Note Title" value={noteTitle} onChange={e=>setNoteTitle(e.target.value)}/>
        <input data-testid="input-note-status" type="text" className="large mx-8"
              placeholder="Note Status" value={noteStatus} onChange={e=>setNoteStatus(e.target.value)}/>
        <button className="" data-testid="submit-button" onClick={()=>addNote()}>Add Note</button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li className="tab-item slide-up-fade-in" data-testid="allButton" onClick={()=>setTab(0)}>All</li>
          <li className="tab-item slide-up-fade-in" data-testid="activeButton" onClick={()=>setTab(1)}>Active</li>
          <li className="tab-item slide-up-fade-in" data-testid="completedButton" onClick={()=>setTab(2)}>Completed</li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody data-testid="noteList">
            {notes.map((item, index)=>{
              let name = item.name;
              let status = item.status;
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp