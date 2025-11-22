package com.skytrack.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlightStatus {
    private String airline;
    private String flightNumber;
    private String status;
    private AirportInfo origin;
    private AirportInfo destination;
    private String departureTime;
    private String arrivalTime;
    private String duration;
    private String aircraft;
    private String gate;
    private String baggage;
    private String weather;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AirportInfo {
        private String code;
        private String city;
        private String terminal;
    }
}
