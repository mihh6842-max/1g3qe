import BackButton from '../components/BackButton'

const VideoIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="playGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667EEA" />
        <stop offset="100%" stopColor="#764BA2" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="24" fill="url(#playGrad)" />
    <path d="M26 20L44 32L26 44V20Z" fill="white" />
  </svg>
)

export default function Lectures() {
  const lectures = [
    { title: 'Физиология лыжника', duration: '45 мин' },
    { title: 'Техника дыхания', duration: '30 мин' },
    { title: 'Питание спортсмена', duration: '50 мин' },
    { title: 'Психология соревнований', duration: '40 мин' },
    { title: 'Выбор лыжной трассы', duration: '35 мин' },
    { title: 'Профилактика травм', duration: '45 мин' },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Фон trassa.jpg */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/trassa.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) saturate(1.2)',
        }}
      />

      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-orange-600/30" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />

      <BackButton />

      <div className="px-4 py-6 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block backdrop-blur-xl bg-white/10 px-6 py-4 rounded-3xl border border-white/20 shadow-2xl mb-6">
            <h1 className="text-4xl font-black text-white mb-1">Лекции</h1>
            <p className="text-white/90 font-medium">Теоретические материалы</p>
          </div>

          <div className="space-y-4">
            {lectures.map((lecture, index) => (
              <button
                key={index}
                onClick={() => alert(`Лекция: ${lecture.title}\nПродолжительность: ${lecture.duration}\n\nСкоро будет доступна!`)}
                className="lecture-button group"
              >
                <div className="icon-container drop-shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
                  <VideoIcon className="w-12 h-12" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <h3 className="font-bold text-white mb-1.5 text-base leading-tight" style={{color: 'rgba(232, 212, 200, 0.9)'}}>
                    {lecture.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium" style={{color: 'rgba(232, 212, 200, 0.6)'}}>⏱️ {lecture.duration}</span>
                    <span className="text-xs backdrop-blur-lg bg-purple-500/20 text-purple-200 px-2 py-0.5 rounded-full border border-purple-300/30">HD</span>
                  </div>
                </div>
                <div className="lecture-play-btn flex-shrink-0">
                  <div className="text-orange-100 text-xl">▶</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
