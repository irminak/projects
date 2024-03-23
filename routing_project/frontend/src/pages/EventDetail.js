import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams();
    return <p>{params.id}</p>;
};

export default EventDetailPage;
