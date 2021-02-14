import react from 'react';
import {styles} from './styles.js'

import Deadlines from './Deadlines.js'

export default function Summary() {
    
    return (
        <>
            <div style={styles.container}>
                <h1 style={{fontSize: "4em"}}>Summary</h1>
            </div>
            
            <div style={styles.calendar}>
                <h2>summary</h2>
            </div>
            <Deadlines />
        </>
    )
}