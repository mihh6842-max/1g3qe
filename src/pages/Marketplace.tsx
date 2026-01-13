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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-pink-500/30 via-orange-500/20 to-purple-600/30" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />

      <BackButton />

      <div className="px-4 py-6 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block backdrop-blur-xl bg-white/10 px-6 py-4 rounded-3xl border border-white/20 shadow-2xl mb-6">
            <h1 className="text-4xl font-black text-white mb-1">Магазин КЛС</h1>
            <p className="text-white/90 font-medium">Купи/продай инвентарь</p>
          </div>

          <button
            onClick={() => alert('Размещение объявления скоро будет доступно!')}
            className="post-ad-button group"
          >
            <span className="text-xl">📦</span>
            <span>Разместить объявление</span>
            <span className="group-hover:rotate-12 transition-transform">+</span>
          </button>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-2xl bg-white/15 rounded-3xl p-5 border border-white/20 shadow-2xl hover:bg-white/25 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-20 backdrop-blur-lg bg-white/10 rounded-2xl flex items-center justify-center text-4xl border border-white/20">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/70 mb-2">
                      Продавец: {item.seller}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold" style={{color: 'rgba(232, 212, 200, 0.95)'}}>
                        {item.price}
                      </span>
                      <span className="text-xs backdrop-blur-lg bg-green-500/80 text-white px-3 py-1 rounded-full border border-green-300/30">
                        {item.condition}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Товар: ${item.title}\nПродавец: ${item.seller}\nЦена: ${item.price}\n\nОтправка сообщения скоро будет доступна!`)}
                  className="contact-seller-button group"
                >
                  <span>💬</span>
                  <span>Написать продавцу</span>
                  <span className="button-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
