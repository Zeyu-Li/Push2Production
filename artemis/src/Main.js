import react from 'react';
import MainNavbar from './MainNavbar.js'

export default function Main(props) {


    return (
        <div>
            <MainNavbar setTab={props.setTab}/>
            {/* <button onClick={()=>clickEvent()}></button> */}
            {props.children}
        </div>
    )
}