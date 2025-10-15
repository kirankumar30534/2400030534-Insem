import React, { useState } from "react";
import "./App.css";

function App() {
  const studentsList = ["Ravi", "Kiran", "Sri Devi", "Raghavendra", "Reventh"];
  const [attendance, setAttendance] = useState({});
  const [presentCount, setPresentCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const absentCount = studentsList.length - presentCount; // <-- Add this line

  const handleAttendance = (name) => {
    const updated = { ...attendance };
    if (updated[name]) {
      delete updated[name];
      setPresentCount(presentCount - 1);
    } else {
      updated[name] = true;
      setPresentCount(presentCount + 1);
    }
    setAttendance(updated);
    setSubmitted(false); 
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="outer-container">
      <div className="main-box">
        <h1>📋 Attendance Tracker</h1>

        <div className="students-list">
          {studentsList.map((name, index) => (
            <div key={index} className="student-card">
              <label>
                <input
                  type="checkbox"
                  checked={attendance[name] || false}
                  onChange={() => handleAttendance(name)}
                />
                {name}
              </label>
            </div>
          ))}
        </div>

        <h3 className="count">Total Present: {presentCount}</h3>
        <h3 className="count">Total Absent: {absentCount}</h3> {/* <-- Add this line */}

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>

        {submitted && (
          <p className="submit-msg">✅ Attendance Submitted Successfully!</p>
        )}
      </div>
    </div>
  );
}

export default App;
