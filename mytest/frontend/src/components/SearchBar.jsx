import { useState } from 'react'
import { Search, Loader2 } from 'lucide-react'

export default function SearchBar({ onSearch, isLoading }) {
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (query.trim()) {
            onSearch(query)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="glass-panel p-3 flex gap-3 transition-all duration-300 hover:bg-slate-800/50">
            <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter flight number (e.g., AA123)"
                    className="w-full bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 pl-14 py-4 text-lg outline-none"
                />
            </div>
            <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed px-8 text-lg"
            >
                {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : 'Track Flight'}
            </button>
        </form>
    )
}
