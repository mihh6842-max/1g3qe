import BackButton from '../components/BackButton'

export default function Equipment() {
  const categories = [
    {
      title: 'Лыжи',
      icon: '🎿',
      items: [
        { name: 'Fischer Speedmax Classic', link: 'https://...', rating: '⭐⭐⭐⭐⭐' },
        { name: 'Salomon S/Race Skate', link: 'https://...', rating: '⭐⭐⭐⭐⭐' },
        { name: 'Atomic Redster C9', link: 'https://...', rating: '⭐⭐⭐⭐' },
      ],
    },
    {
      title: 'Палки',
      icon: '🏒',
      items: [
        { name: 'Swix Triac 2.5', link: 'https://...', rating: '⭐⭐⭐⭐⭐' },
        { name: 'KV+ Tempesta', link: 'https://...', rating: '⭐⭐⭐⭐' },
      ],
    },
    {
      title: 'Ботинки',
      icon: '👢',
      items: [
        { name: 'Salomon S/Race Carbon', link: 'https://...', rating: '⭐⭐⭐⭐⭐' },
        { name: 'Fischer RCS Carbonlite', link: 'https://...', rating: '⭐⭐⭐⭐' },
      ],
    },
    {
      title: 'Одежда',
      icon: '🧥',
      items: [
        { name: 'Костюм гоночный Craft', link: 'https://...', rating: '⭐⭐⭐⭐⭐' },
        { name: 'Куртка Swix Triac', link: 'https://...', rating: '⭐⭐⭐⭐' },
      ],
    },
    {
      title: 'Аксессуары',
      icon: '🎒',
      items: [
        { name: 'Чехол для лыж Thule', link: 'https://...', rating: '⭐⭐⭐⭐⭐' },
        { name: 'Мази Swix набор', link: 'https://...', rating: '⭐⭐⭐⭐' },
      ],
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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-cyan-600/30" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />

      <BackButton />

      <div className="px-4 py-6 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block backdrop-blur-xl bg-white/10 px-6 py-4 rounded-3xl border border-white/20 shadow-2xl mb-6">
            <h1 className="text-4xl font-black text-white mb-1">
              Рекомендации по инвентарю
            </h1>
            <p className="text-white/90 font-medium">
              Проверенный инвентарь
            </p>
          </div>

          <div className="space-y-6">
            {categories.map((category, index) => (
              <div key={index} className="backdrop-blur-2xl bg-white/15 rounded-3xl p-5 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl drop-shadow-2xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => alert(`Товар: ${item.name}\nРейтинг: ${item.rating}\n\nПереход на маркетплейс скоро будет доступен!`)}
                      className="equipment-item-button group"
                    >
                      <div className="flex items-center justify-between w-full">
                        <h4 className="font-semibold text-sm text-left flex-1" style={{color: 'rgba(232, 212, 200, 0.9)'}}>
                          {item.name}
                        </h4>
                        <span className="text-xs ml-2">{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="backdrop-blur-lg bg-blue-500/20 px-3 py-1.5 rounded-xl border border-blue-300/30 flex items-center gap-2">
                          <span className="text-xs font-medium" style={{color: 'rgba(180, 200, 255, 0.9)'}}>🛒 Купить</span>
                          <span className="button-arrow" style={{color: 'rgba(180, 200, 255, 0.9)'}}>→</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 backdrop-blur-2xl bg-orange-500/20 rounded-3xl p-5 shadow-2xl border border-orange-300/40">
            <p className="text-sm text-white">
              <span className="font-bold">💡 Совет:</span> Перед покупкой
              проконсультируйтесь с тренером для подбора инвентаря под ваш уровень
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
