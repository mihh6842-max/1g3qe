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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-purple-600/30" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />

      <BackButton />

      <div className="px-4 py-6 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block backdrop-blur-xl bg-white/10 px-6 py-4 rounded-3xl border border-white/20 shadow-2xl mb-6">
            <h1 className="text-4xl font-black text-white mb-1">Обучение</h1>
            <p className="text-white/90 font-medium">Выберите стиль катания</p>
          </div>

          <div className="space-y-4">
            {styles.map((style, index) => (
              <div
                key={index}
                className="backdrop-blur-2xl bg-white/15 rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/25 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="icon-container drop-shadow-2xl">
                    <style.Icon className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white mb-1">
                      {style.title}
                    </h2>
                    <p className="text-white/80 text-sm font-medium">{style.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {style.lessons.map((lesson, idx) => (
                    <button
                      key={idx}
                      onClick={() => alert(`Урок: ${lesson}\n\nСкоро будет доступен!`)}
                      className="lesson-button group"
                    >
                      <div className="lesson-icon">📚</div>
                      <div className="flex-1 text-left min-w-0">
                        <span className="text-sm font-semibold" style={{color: 'rgba(232, 212, 200, 0.9)'}}>
                          {lesson}
                        </span>
                      </div>
                      <span className="status-badge">Бесплатно</span>
                      <span className="button-arrow" style={{color: 'rgba(212, 165, 116, 0.9)'}}>→</span>
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
