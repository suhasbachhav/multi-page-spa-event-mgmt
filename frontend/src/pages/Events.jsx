import { Link } from "react-router-dom";
import { EVENTS } from "../events-list";

function Eventspage() {
    return (
        <>
            <h1>Event List</h1>
            <ul>
                {
                EVENTS.map((event)=>{
                    return (
                        <li key={event.id}>
                            <Link to={`e${event.id}`}>
                                {event.title}
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </>
    );
}

export default Eventspage;