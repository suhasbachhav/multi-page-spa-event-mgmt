// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import Eventspage from './pages/Event';
import EditEventPage from './pages/EditEvent';
import NewEventPage from './pages/NewEvent';
import EventDetailsPage from './pages/EventDetails';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
      { path: 'events', element: <Eventspage />},
      { path: 'events/:eventId', element: <EventDetailsPage />},
      { path: 'events/new', element: <NewEventPage />},
      { path: 'events/:eventId/edit', element: <EditEventPage />},
    ]
  },
  
]);

function App() {
  return <RouterProvider  router={router}/>;
}

export default App;

