package com.skytrack.service;

import com.skytrack.model.FlightStatus;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class FlightService {

    private final Map<String, FlightStatus> mockDb = new HashMap<>();

    public FlightService() {
        // Initialize mock data
        mockDb.put("AA123", new FlightStatus(
            "American Airlines", "AA123", "On Time",
            new FlightStatus.AirportInfo("JFK", "New York", "Terminal 8"),
            new FlightStatus.AirportInfo("LHR", "London", "Terminal 3"),
            "18:30 EST", "06:20 GMT", "6h 50m", "Boeing 777-300ER", "B14", "Carousel 4", "12°C Cloudy"
        ));
        
        mockDb.put("DL456", new FlightStatus(
            "Delta", "DL456", "Delayed",
            new FlightStatus.AirportInfo("LAX", "Los Angeles", "Terminal 2"),
            new FlightStatus.AirportInfo("HND", "Tokyo", "Terminal 3"),
            "10:00 PST", "14:30 JST", "11h 30m", "Airbus A350", "134", "Carousel 2", "18°C Rain"
        ));
    }

    public FlightStatus getFlightStatus(String flightNumber) {
        String key = flightNumber.toUpperCase();
        if (mockDb.containsKey(key)) {
            return mockDb.get(key);
        }

        // Random generator for unknown flights
        if (flightNumber.length() >= 3) {
            return generateRandomFlight(key);
        }

        throw new RuntimeException("Flight not found");
    }

    private FlightStatus generateRandomFlight(String flightNumber) {
        Random rand = new Random();
        boolean onTime = rand.nextBoolean();
        
        return new FlightStatus(
            "Sky Airways", flightNumber, onTime ? "On Time" : "Scheduled",
            new FlightStatus.AirportInfo("SFO", "San Francisco", "Terminal 1"),
            new FlightStatus.AirportInfo("SIN", "Singapore", "Terminal 4"),
            "22:15 PST", "05:45 SGT", "16h 30m", "Boeing 787-9", "G4", "Carousel 8", "28°C Clear"
        );
    }
}
