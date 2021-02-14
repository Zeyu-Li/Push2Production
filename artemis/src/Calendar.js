import react, {useState} from 'react';
import {styles} from './styles.js'

export default function Calendar() {
    const [showPopup, setShowPopup] = useState(false)
    const [showDayView, setDayView] = useState(false)
    const [newDescription, setnewItem] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    
    // TODO: new view
    return (
        <>
            <div style={styles.container}>
                <h1 style={{fontSize: "4em"}}>Hello User</h1>
            </div>
            
            <div style={styles.calendar}>
                <h2>Calendar</h2>
            </div>

            {showPopup ? 
            <div className="popup">
                <div className="popup_container">
                    <p style={{fontSize: "20px"}}>Add item</p>
                    <input placeholder="Enter Description" type="text" id="to_add" value={newDescription} />
                    <input placeholder="Enter Date" type="date" id="to_add" onChange={setDate}/>
                    <input style={{marginBottom: "20px"}} placeholder="Enter Time" type="time" id="to_add" onChange={setTime}/>
                    <button className="add-item inline blue" onClick={()=> {setShowPopup(!showPopup)}}>Submit</button>
                    <button className="add-item red inline red" onClick={()=> {setShowPopup(!showPopup)}}>Cancel</button>
                </div>
            </div>: <></>}

            {showDayView ? 
            <div className="popup" >
                <div className="popup_container day_popup">
                    <p style={{fontSize: "20px"}}>Day View</p>
                    <div style={{height: "75vh", backgroundColor: "#212529"}}>
                        <p>Day View</p>
                    </div>
                </div>
            </div>: <></>}
            

            <button className="calenderAddButton" style={styles.calenderAddButton} onClick={()=> {
                setShowPopup(!showPopup)
                // clear popup
                setnewItem()
                }}>+</button>
        </>
    )
}