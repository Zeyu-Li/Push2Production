import {styles} from './styles.js'

export default function DayView(props) {
    return (
        <>
            <div style={styles.container}>
                <h1 style={{fontSize: "4em"}}>{props.date}</h1>
            </div>
            
            <div style={styles.calendar}>
                <h2>Day</h2>
            </div>
        </>
    )

} 