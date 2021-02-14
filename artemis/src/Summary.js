import react from 'react';
import {styles} from './styles.js';
import './App.css';

import Deadlines from './Deadlines.js';
import AssignHeat from './AssignHeat.js';

export default function Summary() {
    
    // Temporary for working with the dummy data.
    const evData = [
        {
        day: "2015-03-25",
        events: [
            { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
            { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
            { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
            { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
            { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" }
        ]
        },
        
        {
        day: "2015-04-25",
        events: [
            { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
            { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
            { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" }
        ]
        },
    ];

    return (
        <>
            {/* Summary Page header. */}
            <div style={styles.container}>
                <h1 style={{fontSize: "4em"}}>Summary</h1>
            </div>
            
            {/* Heatmap of events. */}
            <div style={styles.heatmap_container}>
                <AssignHeat data={evData}/>
            </div>

            {/* Deadlines summary. */}
            <div style={styles.calendar}>
                <h2>Deadlines</h2>
            </div>
            <Deadlines />
        </>
    )
}