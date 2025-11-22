import { Plane, Clock, MapPin } from 'lucide-react'

export default function FlightCard({ flight }) {
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'on time': return 'status-ontime';
            case 'delayed': return 'status-delayed';
            case 'scheduled': return 'status-scheduled';
            default: return 'status-scheduled';
        }
    }

    return (
        <div className="glass-panel p-8 w-full">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <div className="text-sm text-slate-400 mb-1">Flight</div>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                        {flight.airline} {flight.flightNumber}
                    </div>
                </div>
                <div className={`status-badge ${getStatusClass(flight.status)}`}>
                    {flight.status}
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                {/* Origin */}
                <div className="text-center md:text-left flex-1">
                    <div className="text-4xl font-bold text-white mb-2">{flight.origin.code}</div>
                    <div className="text-slate-400 text-sm">{flight.origin.city}</div>
                    <div className="text-slate-500 text-xs mt-1">{flight.origin.terminal}</div>
                    <div className="mt-4 flex items-center gap-2 text-blue-400 justify-center md:justify-start">
                        <Clock className="h-4 w-4" />
                        <span className="font-mono">{flight.departureTime}</span>
                    </div>
                </div>

                {/* Visual Path */}
                <div className="flex-1 flex flex-col items-center w-full">
                    <div className="text-xs text-slate-500 mb-2">{flight.duration}</div>
                    <div className="w-full h-[2px] bg-slate-700 relative flex items-center">
                        <div className="absolute left-0 w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="absolute right-0 w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700">
                            <Plane className="h-5 w-5 text-blue-400 rotate-90" />
                        </div>
                    </div>
                </div>

                {/* Destination */}
                <div className="text-center md:text-right flex-1">
                    <div className="text-4xl font-bold text-white mb-2">{flight.destination.code}</div>
                    <div className="text-slate-400 text-sm">{flight.destination.city}</div>
                    <div className="text-slate-500 text-xs mt-1">{flight.destination.terminal}</div>
                    <div className="mt-4 flex items-center gap-2 text-emerald-400 justify-center md:justify-end">
                        <Clock className="h-4 w-4" />
                        <span className="font-mono">{flight.arrivalTime}</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center md:text-left">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Aircraft</div>
                    <div className="text-white font-medium">{flight.aircraft}</div>
                </div>
                <div className="text-center md:text-left">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Gate</div>
                    <div className="text-white font-medium">{flight.gate}</div>
                </div>
                <div className="text-center md:text-left">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Baggage</div>
                    <div className="text-white font-medium">{flight.baggage}</div>
                </div>
                <div className="text-center md:text-left">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Weather</div>
                    <div className="text-white font-medium">{flight.weather}</div>
                </div>
            </div>
        </div>
    )
}
