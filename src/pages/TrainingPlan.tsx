import { useState } from 'react'
import BackButton from '../components/BackButton'

export default function TrainingPlan() {
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate'>('beginner')

  const plans = {
    beginner: {
      title: 'Начинающий уровень',
      weeks: [
        {
          week: 'Неделя 1',
          days: [
            { day: 'ПН', task: 'Кардио 30 мин', icon: '🏃', completed: false },
            { day: 'СР', task: 'Техника классики', icon: '🎿', completed: false },
            { day: 'ПТ', task: 'Кардио 40 мин', icon: '🏃', completed: false },
            { day: 'СБ', task: 'Свободное катание', icon: '⛷️', completed: false },
          ],
        },
      ],
    },
    intermediate: {
      title: 'Средний уровень',
      weeks: [
        {
          week: 'Неделя 1',
          days: [
            { day: 'ПН', task: 'Интервалы 45 мин', icon: '⚡', completed: false },
            { day: 'ВТ', task: 'Силовая подготовка', icon: '💪', completed: false },
            { day: 'СР', task: 'Техника конькового', icon: '⛷️', completed: false },
            { day: 'ЧТ', task: 'Кросс-тренинг', icon: '🏃', completed: false },
            { day: 'ПТ', task: 'Интервалы на трассе', icon: '⚡', completed: false },
            { day: 'СБ', task: 'Длинная тренировка', icon: '🎿', completed: false },
          ],
        },
      ],
    },
  }

  const currentPlan = plans[selectedLevel]

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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-green-500/30 via-blue-500/20 to-purple-600/30" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />

      <BackButton />

      <div className="px-4 py-6 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block backdrop-blur-xl bg-white/10 px-6 py-4 rounded-3xl border border-white/20 shadow-2xl mb-6">
            <h1 className="text-4xl font-black text-white mb-1">Тренировочный план</h1>
            <p className="text-white/90 font-medium">Программа на месяц</p>
          </div>

          {/* Переключатель уровня */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setSelectedLevel('beginner')}
              className={`flex-1 py-3 rounded-2xl font-semibold transition-all backdrop-blur-lg border ${
                selectedLevel === 'beginner'
                  ? 'bg-orange-500/80 text-white shadow-lg border-orange-300/50'
                  : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20'
              }`}
            >
              Начинающ��й
            </button>
            <button
              onClick={() => setSelectedLevel('intermediate')}
              className={`flex-1 py-3 rounded-2xl font-semibold transition-all backdrop-blur-lg border ${
                selectedLevel === 'intermediate'
                  ? 'bg-orange-500/80 text-white shadow-lg border-orange-300/50'
                  : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20'
              }`}
            >
              Средний
            </button>
          </div>

          {/* План тренировок */}
          <div className="space-y-6">
            {currentPlan.weeks.map((week, idx) => (
              <div key={idx} className="backdrop-blur-2xl bg-white/15 rounded-3xl p-6 border border-white/20 shadow-2xl">
                <h3 className="text-lg font-bold text-white mb-4">
                  {week.week}
                </h3>
                <div className="space-y-2">
                  {week.days.map((day, dayIdx) => (
                    <button
                      key={dayIdx}
                      onClick={() => alert(`Тренировка: ${day.task}\nДень: ${day.day}\n\nОтметить выполнение скоро будет доступно!`)}
                      className="training-day-button group"
                    >
                      <div className="training-day-badge">{day.day}</div>
                      <div className="flex-1 text-left">
                        <p className="font-medium" style={{color: 'rgba(232, 212, 200, 0.9)'}}>{day.task}</p>
                      </div>
                      <div className="text-2xl">{day.icon}</div>
                      <div className="w-6 h-6 backdrop-blur-lg bg-white/10 rounded-lg border border-white/20 group-hover:bg-green-500/30 group-hover:border-green-400/40 transition-all flex items-center justify-center">
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                      </div>
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
