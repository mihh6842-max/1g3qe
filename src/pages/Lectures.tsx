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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-orange-300/20 to-pink-300/20 rounded-full blur-3xl" />

      <BackButton />

      <div className="px-4 py-6 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">Лекции</h1>
          <p className="text-gray-700 mb-8 font-medium">Теоретические материалы для спортсменов</p>

          <div className="space-y-3">
            {lectures.map((lecture, index) => (
              <button
                key={index}
                className="w-full backdrop-blur-xl bg-white/60 rounded-3xl p-5 border border-white/40 shadow-2xl hover:shadow-purple-200/50 hover:bg-white/70 hover:scale-[1.02] transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="drop-shadow-lg group-hover:scale-110 transition-transform">
                  <VideoIcon className="w-14 h-14" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-gray-800 mb-1">
                    {lecture.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">{lecture.duration}</p>
                </div>
                <div className="text-purple-600 text-2xl group-hover:translate-x-1 transition-transform">▶</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
