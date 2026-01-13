import BackButton from '../components/BackButton'

export default function TrainingCamp() {
  const camps = [
    {
      title: 'Январский сбор',
      dates: '15-21 января',
      location: 'Демино',
      price: '3 999 ₽',
      status: 'Открыта запись',
      icon: '❄️',
    },
    {
      title: 'Февральский сбор',
      dates: '12-18 февраля',
      location: 'Демино',
      price: '3 999 ₽',
      status: 'Скоро',
      icon: '⛷️',
    },
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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-600/30" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />

      <BackButton />

      <div className="px-4 py-6 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block backdrop-blur-xl bg-white/10 px-6 py-4 rounded-3xl border border-white/20 shadow-2xl mb-6">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-black text-white">Тренировочный сбор</h1>
              <div className="backdrop-blur-xl bg-gradient-to-br from-orange-400/40 to-yellow-400/40 px-3 py-1.5 rounded-full border-2 border-yellow-300/60 shadow-lg flex items-center gap-1">
                <span className="text-base">🔒</span>
                <span className="text-base">💎</span>
              </div>
            </div>
            <p className="text-white/90 font-medium">
              6 дней с тренером
            </p>
          </div>

          <div className="space-y-4">
            {camps.map((camp, index) => (
              <div
                key={index}
                className="backdrop-blur-2xl bg-white/15 rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/25 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl drop-shadow-2xl">{camp.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {camp.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      <p className="text-white/80">
                        <span className="font-semibold">📅</span> {camp.dates}
                      </p>
                      <p className="text-white/80">
                        <span className="font-semibold">📍</span> {camp.location}
                      </p>
                      <p className="text-white/80">
                        <span className="font-semibold">🏋️</span> 6 тренировок
                      </p>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold" style={{color: 'rgba(232, 212, 200, 0.95)'}}>
                        {camp.price}
                      </span>
                      <span className="backdrop-blur-lg bg-green-500/80 text-white px-3 py-1 rounded-full text-sm font-medium border border-green-300/30">
                        {camp.status}
                      </span>
                    </div>
                    <button
                      onClick={() => alert(`Сбор: ${camp.title}\nДаты: ${camp.dates}\nМесто: ${camp.location}\nЦена: ${camp.price}\n\nЗапись скоро будет доступна!`)}
                      className="buy-course-button group"
                    >
                      <span>✍️</span>
                      <span>Записаться на сбор</span>
                      <span className="button-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 backdrop-blur-2xl bg-white/15 rounded-3xl p-6 border border-white/20 shadow-2xl">
            <h3 className="font-bold text-white mb-3">Что включено:</h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center gap-2">
                <span>✅</span> 6 тренировок с тренером
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span> Видео-анализ техники
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span> Индивидуальные рекомендации
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span> Доступ к закрытой группе
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
