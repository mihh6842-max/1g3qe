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
      location: 'Деми но',
      price: '3 999 ₽',
      status: 'Скоро',
      icon: '⛷️',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <BackButton />

      <div className="px-4 py-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold text-gray-800">Тренировочный сбор</h1>
            <span className="text-xl">🔒💲</span>
          </div>
          <p className="text-gray-600 mb-8">
            6 дней интенсивных тренировок с профессиональным тренером
          </p>

          <div className="space-y-4">
            {camps.map((camp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg border-2 border-blue-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{camp.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {camp.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      <p className="text-gray-700">
                        <span className="font-semibold">📅</span> {camp.dates}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">📍</span> {camp.location}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">🏋️</span> 6 тренировок
                      </p>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600">
                        {camp.price}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {camp.status}
                      </span>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors">
                      Записаться на сбор
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-800 mb-3">Что включено:</h3>
            <ul className="space-y-2 text-gray-700">
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
