import react, {useState} from 'react';
import {styles} from './styles.js'

export default function Calendar() {
    const [showPopup, setShowPopup] = useState(false)
    const [newItem, setnewItem] = useState("")
    
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
                    <p>Add item</p>
                    <input placeholder="Enter Date" type="text" id="to_add" value={newItem} />
                    <button className="add-item inline blue">Submit</button>
                    <button className="add-item red inline red" onClick={()=> {setShowPopup(!showPopup)}}>Cancel</button>
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