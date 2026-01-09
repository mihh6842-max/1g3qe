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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <BackButton />

      <div className="px-4 py-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold text-gray-800">Курсы</h1>
            <span className="text-xl">🔒💲</span>
          </div>
          <p className="text-gray-600 mb-8">Платные обучающие программы</p>

          <div className="space-y-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg border-2 border-blue-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{course.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {course.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-600 mb-3">
                      <span>📅 {course.duration}</span>
                      <span>📚 {course.lessons} уроков</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-4">
                      {course.price}
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors">
                      Купить курс
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
