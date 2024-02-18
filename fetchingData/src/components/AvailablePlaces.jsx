import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';
import { sortPlacesByDistance } from '../loc.js';
import Error from './Error.jsx';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);

            try {
                const places = await fetchAvailablePlaces();

                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(
                        places,
                        position.coords.latitude,
                        position.coords.longitude
                    );
                    setAvailablePlaces(sortedPlaces);
                    setIsFetching(false);
                });
            } catch (error) {
                setError({ message: error.message || 'Content not find' });
                setIsFetching(false);
            }
        }
        fetchPlaces();
    }, []);

    if (error) {
        return (
            <Error
                title='Error occured'
                message={error.message}
            />
        );
    }

    return (
        <Places
            title='Available Places'
            places={availablePlaces}
            isLoading={isFetching}
            loadingText='Fetching places data...'
            fallbackText='No places available.'
            onSelectPlace={onSelectPlace}
        />
    );
}
