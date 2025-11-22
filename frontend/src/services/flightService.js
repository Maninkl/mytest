export const getFlightStatus = async (flightNumber) => {
    try {
        const response = await fetch(`/api/flights/${flightNumber}`);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || 'Flight not found');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'Failed to fetch flight status');
    }
}
