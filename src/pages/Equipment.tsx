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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <BackButton />

      <div className="px-4 py-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Рекомендации по инвентарю
          </h1>
          <p className="text-gray-600 mb-8">
            Проверенный инвентарь для тренировок
          </p>

          <div className="space-y-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-50 rounded-xl p-4 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {item.name}
                        </h4>
                        <span className="text-xs">{item.rating}</span>
                      </div>
                      <button className="text-blue-600 text-xs font-medium hover:underline">
                        Купить на маркетплейсе →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-5">
            <p className="text-sm text-gray-700">
              <span className="font-bold">💡 Совет:</span> Перед покупкой
              проконсультируйтесь с тренером для подбора инвентаря под ваш уровень
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
