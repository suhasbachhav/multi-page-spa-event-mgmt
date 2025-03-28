
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import Eventspage, {loader as eventLoader} from './pages/Events';
import EditEventPage from './pages/EditEvent';
import NewEventPage from './pages/NewEvent';
import EventDetailsPage from './pages/EventDetails';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />},
      { 
        path: 'events',
        element: <EventsRootLayout />,
        children:[
          { 
            index: true,
            element: <Eventspage />,
            loader: eventLoader
          },
          { path: ':eventId', element: <EventDetailsPage />},
          { path: 'new', element: <NewEventPage />},
          { path: ':eventId/edit', element: <EditEventPage />},
        ]
      },
    ]
  },
  
]);

function App() {
  return <RouterProvider  router={router}/>;
}

export default App;

