import BackButton from '../components/BackButton'

export default function Courses() {
  const courses = [
    {
      title: 'Профессиональная подготовка',
      price: '9 999 ₽',
      duration: '3 месяца',
      icon: '🏆',
      lessons: 24,
    },
    {
      title: 'Техника для начинающих',
      price: '4 999 ₽',
      duration: '1 месяц',
      icon: '⭐',
      lessons: 8,
    },
    {
      title: 'Подготовка к соревнованиям',
      price: '14 999 ₽',
      duration: '6 месяцев',
      icon: '🥇',
      lessons: 48,
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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-600/30" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />

      <BackButton />

      <div className="px-4 py-6 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block backdrop-blur-xl bg-white/10 px-6 py-4 rounded-3xl border border-white/20 shadow-2xl mb-6">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-black text-white">Курсы</h1>
              <div className="backdrop-blur-xl bg-gradient-to-br from-orange-400/40 to-yellow-400/40 px-3 py-1.5 rounded-full border-2 border-yellow-300/60 shadow-lg flex items-center gap-1">
                <span className="text-base">🔒</span>
                <span className="text-base">💎</span>
              </div>
            </div>
            <p className="text-white/90 font-medium">Платные программы</p>
          </div>

          <div className="space-y-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="backdrop-blur-2xl bg-white/15 rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/25 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl drop-shadow-2xl">{course.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {course.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-white/80 mb-3">
                      <span>📅 {course.duration}</span>
                      <span>📚 {course.lessons} уроков</span>
                    </div>
                    <div className="text-2xl font-bold mb-4" style={{color: 'rgba(232, 212, 200, 0.95)'}}>
                      {course.price}
                    </div>
                    <button
                      onClick={() => alert(`Курс: ${course.title}\nЦена: ${course.price}\n\nОформление покупки скоро будет доступно!`)}
                      className="buy-course-button group"
                    >
                      <span>💳</span>
                      <span>Купить курс</span>
                      <span className="button-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
