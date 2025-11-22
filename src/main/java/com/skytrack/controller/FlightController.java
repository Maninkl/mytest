package com.skytrack.controller;

import com.skytrack.model.FlightStatus;
import com.skytrack.service.FlightService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/flights")
@CrossOrigin(origins = "http://localhost:5173") // Allow Vite dev server
public class FlightController {

    private final FlightService flightService;

    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping("/{flightNumber}")
    public ResponseEntity<?> getFlightStatus(@PathVariable String flightNumber) {
        try {
            FlightStatus status = flightService.getFlightStatus(flightNumber);
            return ResponseEntity.ok(status);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(Map.of("error", e.getMessage()));
        }
    }
    
    // Helper for error JSON
    private static class Map extends java.util.HashMap<String, String> {
        public static Map of(String k, String v) {
            Map m = new Map();
            m.put(k, v);
            return m;
        }
    }
}
