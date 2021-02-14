import react from 'react';

export default function Calendar() {
    const tempCalendar = {
        width: "90vw",
        height: "90vh",
        marginLeft: "5vw",
        backgroundColor: "gray",
        borderRadius: "15px",
    }
    
    const containStyle = {
        marginTop: "5vh",
        marginBottom: "3vh",
        marginLeft: "50px",
        marginRight: "50px",
        textAlign: "left",
    }
    
    return (
        <>
            <div style={containStyle}>
                <h1 style={{fontSize: "4em"}}>Hello User</h1>
            </div>
            
            <div style={tempCalendar}>
                <h2>Calendar</h2>
            </div>
        </>
    )
}