import BackButton from '../components/BackButton'

export default function Marketplace() {
  const items = [
    {
      title: 'Лыжи Fischer Speedmax',
      price: '25 000 ₽',
      seller: 'Иван П.',
      condition: 'Отличное',
      image: '🎿',
    },
    {
      title: 'Палки Swix Triac',
      price: '8 500 ₽',
      seller: 'Мария К.',
      condition: 'Как новые',
      image: '🏒',
    },
    {
      title: 'Ботинки Salomon',
      price: '12 000 ₽',
      seller: 'Алексей С.',
      condition: 'Б/у',
      image: '👢',
    },
    {
      title: 'Костюм для лыж',
      price: '6 000 ₽',
      seller: 'Екатерина Л.',
      condition: 'Отличное',
      image: '🧥',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <BackButton />

      <div className="px-4 py-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Магазин КЛС</h1>
          <p className="text-gray-600 mb-6">Купи/продай спортивный инвентарь</p>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl mb-6 transition-colors">
            + Разместить объявление
          </button>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center text-4xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Продавец: {item.seller}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {item.price}
                      </span>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        {item.condition}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-3 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 rounded-lg transition-colors">
                  Написать продавцу
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
