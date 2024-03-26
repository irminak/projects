import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home.js';
import EventsPage, { loader as eventsLoader } from './pages/Events.js';
import EditEventPage from './pages/EditEvent.js';
import EventDetailPage, {
    loader as eventDetailsLoader,
    action as deleteEventAction,
} from './pages/EventDetail.js';
import NewEventPage from './pages/NewEvent.js';
import RootPage from './pages/Root.js';
import EventsRootPage from './pages/EventsRoot.js';
import ErrorPage from './pages/Error.js';
import { action as manipulateEventAction } from './components/EventForm.js';
// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
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

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootPage />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: 'events',
                    element: <EventsRootPage />,
                    children: [
                        {
                            index: true,
                            element: <EventsPage />,
                            loader: eventsLoader,
                        },
                        {
                            path: ':id',
                            id: 'event-detail',
                            loader: eventDetailsLoader,
                            children: [
                                {
                                    index: true,
                                    element: <EventDetailPage />,
                                    action: deleteEventAction,
                                },

                                {
                                    path: 'edit',
                                    element: <EditEventPage />,
                                    action: manipulateEventAction,
                                },
                            ],
                        },
                        {
                            path: 'new',
                            element: <NewEventPage />,
                            action: manipulateEventAction,
                        },
                    ],
                },
            ],
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
