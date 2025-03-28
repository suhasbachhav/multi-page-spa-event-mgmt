
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const fetchedEvents = useLoaderData();
    if(fetchedEvents.isError){
        return <p>{fetchedEvents.message}</p>
    }
    return (
        <EventsList events={fetchedEvents} />
    );
}


export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        return new Response(JSON.stringify({ message: 'Could not fetch events'}, {status: 500}))
        // return {isError: true, message: 'Could not fetch events'}
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export default EventsPage;