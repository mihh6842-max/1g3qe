import BackButton from '../components/BackButton'
import { ClassicBoardIcon, SkateBoardIcon } from '../components/BoardIcons'

export default function Training() {

  const styles = [
    {
      title: 'Классический стиль',
      Icon: ClassicBoardIcon,
      description: 'Традиционная техника передвижения на лыжах',
      lessons: ['Урок 1: Основы', 'Урок 2: Одношажный ход', 'Урок 3: Двухшажный ход', 'Урок 4: Коньковый ход'],
    },
    {
      title: 'Коньковый стиль',
      Icon: SkateBoardIcon,
      description: 'Современная техника свободного стиля',
      lessons: ['Урок 1: Стойка и баланс', 'Урок 2: Одновременный ход', 'Урок 3: Попеременный ход', 'Урок 4: Подъемы'],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-300/20 to-orange-300/20 rounded-full blur-3xl" />

      <BackButton />

      <div className="px-4 py-6 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">Обучение</h1>
          <p className="text-gray-700 mb-8 font-medium">Выберите стиль катания для обучения</p>

          <div className="space-y-4">
            {styles.map((style, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 border border-white/40 shadow-2xl hover:shadow-orange-200/50 hover:bg-white/70 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="drop-shadow-2xl">
                    <style.Icon className="w-16 h-16" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-1">
                      {style.title}
                    </h2>
                    <p className="text-gray-700 text-sm font-medium">{style.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {style.lessons.map((lesson, idx) => (
                    <button
                      key={idx}
                      className="w-full backdrop-blur-lg bg-gradient-to-r from-orange-100/50 to-pink-100/50 hover:from-orange-200/60 hover:to-pink-200/60 rounded-2xl p-3 text-left transition-all duration-200 flex items-center justify-between border border-orange-200/30 hover:border-orange-300/50 group"
                    >
                      <span className="text-gray-800 text-sm font-semibold">
                        {lesson}
                      </span>
                      <span className="text-orange-500 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
