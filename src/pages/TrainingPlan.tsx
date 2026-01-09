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
            { day: 'ПН', task: 'Кардио 30 мин', icon: '🏃' },
            { day: 'СР', task: 'Техника классики', icon: '🎿' },
            { day: 'ПТ', task: 'Кардио 40 мин', icon: '🏃' },
            { day: 'СБ', task: 'Свободное катание', icon: '⛷️' },
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
            { day: 'ПН', task: 'Интервалы 45 мин', icon: '⚡' },
            { day: 'ВТ', task: 'Силовая подготовка', icon: '💪' },
            { day: 'СР', task: 'Техника конькового', icon: '⛷️' },
            { day: 'ЧТ', task: 'Кросс-тренинг', icon: '🏃' },
            { day: 'ПТ', task: 'Интервалы на трассе', icon: '⚡' },
            { day: 'СБ', task: 'Длинная тренировка', icon: '🎿' },
          ],
        },
      ],
    },
  }

  const currentPlan = plans[selectedLevel]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <BackButton />

      <div className="px-4 py-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Тренировочный план</h1>
          <p className="text-gray-600 mb-6">Программа тренировок на месяц</p>

          {/* Переключатель уровня */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setSelectedLevel('beginner')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                selectedLevel === 'beginner'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600'
              }`}
            >
              Начинающий
            </button>
            <button
              onClick={() => setSelectedLevel('intermediate')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                selectedLevel === 'intermediate'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600'
              }`}
            >
              Средний
            </button>
          </div>

          {/* План тренировок */}
          <div className="space-y-6">
            {currentPlan.weeks.map((week, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {week.week}
                </h3>
                <div className="space-y-2">
                  {week.days.map((day, dayIdx) => (
                    <div
                      key={dayIdx}
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{day.task}</p>
                      </div>
                      <div className="text-2xl">{day.icon}</div>
                    </div>
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
