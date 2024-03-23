import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation.js';

const EventsRootPage = () => {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
};

export default EventsRootPage;
