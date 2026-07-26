export function Calendrier () {
    //calendar
    
    return (
        <div className="rounded-xl border border-border p-5">
            <div className="mb-4 flex items-center justify-between">
                <span className="font-semibold">Mars 2024</span>
                <div className="flex gap-2">
                    <button>‹</button>
                    <button>›</button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-xs text-muted-foreground">
                {["L", "M", "M", "J", "V", "S", "D"].map((day) => (
                    <span key={day}>{day}</span>
                ))}
            </div>
            <div className="mt-3 grid grid-cols-7 gap-2">
                {[5, 6, 7, 8, 9, 10, 11].map((d) => (
                    <button
                        key={d}
                        className={`rounded-lg py-2 text-sm transition ${
                            d >= 7 && d <= 10
                            ? "bg-primary text-white"
                            : "hover:bg-muted"
                        }`}
                    >
                        {d}
                    </button>
                ))}
            </div>
        </div>
    )
}