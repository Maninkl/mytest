import { Plane } from 'lucide-react'

export default function Header() {
    return (
        <header className="w-full border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
            <div className="container h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-400">
                    <Plane className="h-6 w-6" />
                    <span className="text-xl font-bold text-white tracking-tight">Ani Flight Tracker</span>
                </div>
                <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
                    <a href="#" className="hover:text-white transition-colors">Flights</a>
                    <a href="#" className="hover:text-white transition-colors">Airports</a>
                    <a href="#" className="hover:text-white transition-colors">Map</a>
                </nav>
            </div>
        </header>
    )
}
