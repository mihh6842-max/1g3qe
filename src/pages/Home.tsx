import { useNavigate } from 'react-router-dom'
import { SkiIcon, BookIcon, GraduationIcon, ClipboardIcon, ShoppingIcon, MountainIcon, EquipmentIcon } from '../components/Icons'

interface MenuCard {
  title: string
  icon: React.ComponentType<{ className?: string }>
  path: string
  locked?: boolean
  premium?: boolean
}

const menuItems: MenuCard[] = [
  { title: 'Обучение', icon: SkiIcon, path: '/training' },
  { title: 'Лекции', icon: BookIcon, path: '/lectures' },
  { title: 'Курсы', icon: GraduationIcon, path: '/courses', locked: true, premium: true },
  { title: 'Тренировочный план', icon: ClipboardIcon, path: '/plan' },
  { title: 'Магазин КЛС', icon: ShoppingIcon, path: '/marketplace' },
  { title: 'Тренировочный сбор', icon: MountainIcon, path: '/camp', locked: true, premium: true },
  { title: 'Рекомендации по инвентарю', icon: EquipmentIcon, path: '/equipment' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Фоновое изображение трассы */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('trassa.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) saturate(1.2)',
        }}
      />

      {/* Snowy Sunset градиент оверлей */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-purple-600/30" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />

      {/* Контент */}
      <div className="relative z-10 px-4 py-8 pb-20">
        {/* Заголовок с glassmorphism */}
        <div className="text-center mb-10">
          <div className="inline-block backdrop-blur-xl bg-white/10 px-8 py-6 rounded-3xl border border-white/20 shadow-2xl mb-4">
            <h1 className="text-5xl font-black text-white mb-2 tracking-tight bg-gradient-to-r from-white via-orange-100 to-pink-100 bg-clip-text text-transparent">
              КЛС
            </h1>
            <p className="text-white/90 text-lg font-medium">
              Клуб Лыжного Спорта
            </p>
          </div>
        </div>

        {/* Сетка карточек с glassmorphism */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="section-button group"
            >
              {/* Градиентный эффект при наведении */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-pink-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[32px]" />

              {/* Иконка премиум */}
              {item.premium && (
                <div className="absolute top-3 right-3 backdrop-blur-xl bg-gradient-to-br from-orange-400/40 to-yellow-400/40 px-2.5 py-1.5 rounded-full border-2 border-yellow-300/60 shadow-lg">
                  <div className="flex gap-1 items-center">
                    <span className="text-sm">🔒</span>
                    <span className="text-sm">💎</span>
                  </div>
                </div>
              )}

              {/* Иконка */}
              <div className="icon-container mb-2 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 drop-shadow-2xl relative z-10">
                <item.icon className="w-12 h-12" />
              </div>

              {/* Текст */}
              <div className="relative z-10">
                <h3 className="section-button-text drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Нижняя информация */}
        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm font-medium backdrop-blur-sm bg-black/20 inline-block px-6 py-2 rounded-full border border-white/10">
            Выберите раздел для продолжения
          </p>
        </div>
      </div>
    </div>
  )
}
