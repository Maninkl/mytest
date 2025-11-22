import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FlightCard from './components/FlightCard'
import { getFlightStatus } from './services/flightService'

function App() {
    const [flightData, setFlightData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSearch = async (flightNumber) => {
        setLoading(true)
        setError(null)
        setFlightData(null)

        try {
            // Simulate network delay for effect
            await new Promise(resolve => setTimeout(resolve, 1500))
            const data = await getFlightStatus(flightNumber)
            setFlightData(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 flex flex-col relative">
                {/* Hero Section */}
                <div className={`hero-bg flex flex-col items-center justify-center transition-all duration-700 ${flightData ? 'min-h-[40vh] py-12' : 'min-h-[calc(100vh-4rem)]'}`}>
                    <div className="container flex flex-col items-center gap-10">
                        <div className="text-center space-y-4 max-w-4xl animate-fade-in">
                            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 pb-4"
                                style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #c084fc, #34d399)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                                Track Your Journey
                            </h1>
                            <p className="text-slate-300 text-xl md:text-2xl font-light tracking-wide">
                                Real-time flight status updates with premium precision.
                            </p>
                        </div>

                        <div className="w-full max-w-4xl animate-fade-in shadow-2xl" style={{ animationDelay: '0.1s' }}>
                            <SearchBar onSearch={handleSearch} isLoading={loading} />
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className={`container flex flex-col items-center pb-12 transition-all duration-700 ${flightData ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}>
                    <div className="w-full max-w-4xl mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {error && (
                            <div className="glass-panel p-6 text-center text-red-400 border-red-500/30">
                                {error}
                            </div>
                        )}

                        {flightData && <FlightCard flight={flightData} />}
                    </div>
                </div>
            </main>

            <footer className="fixed bottom-4 right-4 text-xs text-slate-500/50 z-50 font-mono">
                <p>© 2025 Ani Flight Tracker. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
