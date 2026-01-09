interface IconProps {
  className?: string
}

// Обучение - Школьная доска с примерами
export const SkiIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="darkShadow">
        <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="black" floodOpacity="0.4"/>
      </filter>
    </defs>
    {/* Темная подложка */}
    <rect x="10" y="18" width="60" height="44" rx="4" fill="black" opacity="0.2" />
    {/* Доска */}
    <rect x="10" y="18" width="60" height="44" rx="4" fill="white" opacity="1" filter="url(#darkShadow)" />
    <rect x="10" y="18" width="60" height="44" rx="4" stroke="rgba(0,0,0,0.3)" strokeWidth="3" fill="none" />
    {/* Рамка */}
    <rect x="13" y="21" width="54" height="38" rx="2" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" />
    {/* Примеры */}
    <text x="22" y="35" fontFamily="monospace" fontSize="15" fontWeight="bold" fill="black" opacity="0.8">2+2=4</text>
    <text x="22" y="49" fontFamily="monospace" fontSize="15" fontWeight="bold" fill="black" opacity="0.8">5×3=15</text>
    {/* Линия */}
    <line x1="18" y1="41" x2="62" y2="41" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round" />
    {/* Звездочка */}
    <path d="M58 29 L59 32 L62 32 L60 34 L61 37 L58 35 L55 37 L56 34 L54 32 L57 32 Z" fill="gold" opacity="0.9" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
    {/* Мел */}
    <rect x="15" y="56" width="8" height="3" rx="1.5" fill="white" opacity="1" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    {/* Губка */}
    <rect x="56" y="55" width="10" height="5" rx="2" fill="rgba(200,200,200,0.9)" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
  </svg>
)

// Лекции - Play кнопка
export const BookIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="darkShadow"><feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="black" floodOpacity="0.4"/></filter>
    </defs>
    {/* Подложка */}
    <rect x="15" y="22" width="50" height="36" rx="4" fill="black" opacity="0.2" />
    {/* Экран */}
    <rect x="15" y="22" width="50" height="36" rx="4" fill="white" opacity="0.95" filter="url(#darkShadow)" />
    <rect x="15" y="22" width="50" height="36" rx="4" stroke="rgba(0,0,0,0.3)" strokeWidth="3" fill="none" />
    {/* Play */}
    <circle cx="40" cy="40" r="14" fill="rgba(0,0,0,0.15)" />
    <circle cx="40" cy="40" r="14" fill="white" opacity="1" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
    <path d="M35 32 L52 40 L35 48 Z" fill="rgba(0,0,0,0.7)" />
    {/* Волны */}
    <path d="M20 32 Q16 40 20 48" stroke="rgba(0,0,0,0.5)" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M60 32 Q64 40 60 48" stroke="rgba(0,0,0,0.5)" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
)

// Курсы - Шапка студента
export const GraduationIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="darkShadow"><feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="black" floodOpacity="0.4"/></filter>
    </defs>
    {/* Основание */}
    <path d="M10 35 L40 25 L70 35 L40 45 Z" fill="black" opacity="0.2" />
    <path d="M10 35 L40 25 L70 35 L40 45 Z" fill="white" opacity="1" filter="url(#darkShadow)" />
    <path d="M10 35 L40 25 L70 35 L40 45 Z" stroke="rgba(0,0,0,0.3)" strokeWidth="2" fill="none" />
    {/* Верх */}
    <ellipse cx="40" cy="35" rx="30" ry="8" fill="rgba(255,255,255,0.9)" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
    {/* Низ */}
    <path d="M25 35 L25 50 C25 52 30 54 40 54 C50 54 55 52 55 50 L55 35" fill="rgba(255,255,255,0.85)" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
    {/* Кисточка */}
    <line x1="70" y1="35" x2="70" y2="58" stroke="rgba(0,0,0,0.6)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="70" cy="60" r="4" fill="gold" opacity="1" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
    {/* Нити */}
    <line x1="68" y1="62" x2="66" y2="66" stroke="rgba(0,0,0,0.5)" strokeWidth="2" strokeLinecap="round" />
    <line x1="70" y1="62" x2="70" y2="66" stroke="rgba(0,0,0,0.5)" strokeWidth="2" strokeLinecap="round" />
    <line x1="72" y1="62" x2="74" y2="66" stroke="rgba(0,0,0,0.5)" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// План - Календарь
export const ClipboardIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="darkShadow"><feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="black" floodOpacity="0.4"/></filter>
    </defs>
    {/* Подложка */}
    <rect x="18" y="20" width="44" height="48" rx="5" fill="black" opacity="0.2" />
    {/* Календарь */}
    <rect x="18" y="20" width="44" height="48" rx="5" fill="white" opacity="1" filter="url(#darkShadow)" />
    <rect x="18" y="20" width="44" height="48" rx="5" stroke="rgba(0,0,0,0.3)" strokeWidth="3" fill="none" />
    {/* Верх */}
    <rect x="18" y="20" width="44" height="12" rx="5" fill="rgba(0,0,0,0.1)" />
    {/* Крепления */}
    <rect x="28" y="16" width="4" height="8" rx="2" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    <rect x="48" y="16" width="4" height="8" rx="2" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    {/* Дни */}
    <rect x="24" y="38" width="8" height="8" rx="2" fill="rgba(0,0,0,0.15)" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    <rect x="36" y="38" width="8" height="8" rx="2" fill="rgba(0,0,0,0.15)" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    <rect x="48" y="38" width="8" height="8" rx="2" fill="rgba(0,0,0,0.6)" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
    <rect x="24" y="50" width="8" height="8" rx="2" fill="rgba(0,0,0,0.15)" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    <rect x="36" y="50" width="8" height="8" rx="2" fill="rgba(0,0,0,0.15)" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    {/* Галочка */}
    <path d="M50 42 L52 44 L56 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Магазин - Корзина
export const ShoppingIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="darkShadow"><feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="black" floodOpacity="0.4"/></filter>
    </defs>
    {/* Подложка */}
    <path d="M20 28 L18 60 C18 64 20 66 24 66 L56 66 C60 66 62 64 62 60 L60 28 Z" fill="black" opacity="0.2" />
    {/* Корзина */}
    <path d="M20 28 L18 60 C18 64 20 66 24 66 L56 66 C60 66 62 64 62 60 L60 28 Z" fill="white" opacity="1" filter="url(#darkShadow)" />
    <path d="M20 28 L18 60 C18 64 20 66 24 66 L56 66 C60 66 62 64 62 60 L60 28 Z" stroke="rgba(0,0,0,0.3)" strokeWidth="3" fill="none" />
    {/* Ручки */}
    <path d="M26 28 L26 22 C26 16 30 12 40 12 C50 12 54 16 54 22 L54 28" stroke="rgba(0,0,0,0.6)" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Ценник */}
    <rect x="52" y="45" width="8" height="10" rx="2" fill="rgba(255,255,255,0.9)" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
    <rect x="54" y="48" width="4" height="2" rx="1" fill="rgba(0,0,0,0.5)" />
  </svg>
)

// Сбор - Горы
export const MountainIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="darkShadow"><feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="black" floodOpacity="0.4"/></filter>
    </defs>
    {/* Задняя гора */}
    <path d="M52 18 L70 65 L34 65 Z" fill="rgba(0,0,0,0.15)" />
    <path d="M52 18 L70 65 L34 65 Z" fill="white" opacity="0.7" filter="url(#darkShadow)" />
    <path d="M52 18 L70 65 L34 65 Z" stroke="rgba(0,0,0,0.3)" strokeWidth="2" fill="none" />
    {/* Передняя гора */}
    <path d="M28 28 L10 65 L46 65 Z" fill="rgba(0,0,0,0.2)" />
    <path d="M28 28 L10 65 L46 65 Z" fill="white" opacity="1" filter="url(#darkShadow)" />
    <path d="M28 28 L10 65 L46 65 Z" stroke="rgba(0,0,0,0.4)" strokeWidth="3" fill="none" />
    {/* Снег */}
    <path d="M28 28 L32 38 L24 38 Z" fill="rgba(255,255,255,1)" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    <path d="M52 18 L56 30 L48 30 Z" fill="rgba(255,255,255,0.9)" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    {/* Звезда */}
    <path d="M40 12 L42 18 L48 18 L43 22 L45 28 L40 24 L35 28 L37 22 L32 18 L38 18 Z" fill="gold" opacity="1" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
  </svg>
)

// Инвентарь - Лыжи
export const EquipmentIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="darkShadow"><feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="black" floodOpacity="0.4"/></filter>
    </defs>
    {/* Лыжи */}
    <rect x="15" y="15" width="6" height="50" rx="3" fill="rgba(0,0,0,0.15)" transform="rotate(-15 18 40)" />
    <rect x="15" y="15" width="6" height="50" rx="3" fill="white" opacity="1" filter="url(#darkShadow)" transform="rotate(-15 18 40)" />
    <rect x="15" y="15" width="6" height="50" rx="3" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none" transform="rotate(-15 18 40)" />

    <rect x="59" y="15" width="6" height="50" rx="3" fill="rgba(0,0,0,0.15)" transform="rotate(15 62 40)" />
    <rect x="59" y="15" width="6" height="50" rx="3" fill="white" opacity="1" filter="url(#darkShadow)" transform="rotate(15 62 40)" />
    <rect x="59" y="15" width="6" height="50" rx="3" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none" transform="rotate(15 62 40)" />

    {/* Палки */}
    <line x1="28" y1="20" x2="32" y2="60" stroke="rgba(0,0,0,0.6)" strokeWidth="4" strokeLinecap="round" />
    <line x1="52" y1="20" x2="48" y2="60" stroke="rgba(0,0,0,0.6)" strokeWidth="4" strokeLinecap="round" />
    {/* Ручки */}
    <circle cx="28" cy="20" r="4" fill="white" opacity="1" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
    <circle cx="52" cy="20" r="4" fill="white" opacity="1" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
    {/* Кольца */}
    <circle cx="32" cy="60" r="4" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
    <circle cx="48" cy="60" r="4" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
  </svg>
)

// Лыжник
export const SkierIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="darkShadow"><feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="black" floodOpacity="0.4"/></filter>
    </defs>
    {/* Голова */}
    <circle cx="45" cy="18" r="7" fill="rgba(0,0,0,0.15)" />
    <circle cx="45" cy="18" r="7" fill="white" opacity="1" filter="url(#darkShadow)" />
    <circle cx="45" cy="18" r="7" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none" />
    {/* Тело */}
    <path d="M45 25 Q42 35 38 42" stroke="rgba(0,0,0,0.7)" strokeWidth="7" strokeLinecap="round" />
    <path d="M45 25 Q48 35 50 42" stroke="rgba(0,0,0,0.7)" strokeWidth="7" strokeLinecap="round" />
    {/* Руки */}
    <path d="M42 30 L35 38 L28 50" stroke="rgba(0,0,0,0.6)" strokeWidth="5" strokeLinecap="round" />
    <path d="M48 30 L55 38 L62 50" stroke="rgba(0,0,0,0.6)" strokeWidth="5" strokeLinecap="round" />
    {/* Палки */}
    <line x1="28" y1="50" x2="22" y2="66" stroke="rgba(0,0,0,0.5)" strokeWidth="4" strokeLinecap="round" />
    <line x1="62" y1="50" x2="68" y2="66" stroke="rgba(0,0,0,0.5)" strokeWidth="4" strokeLinecap="round" />
    <circle cx="28" cy="50" r="3" fill="white" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
    <circle cx="62" cy="50" r="3" fill="white" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
    {/* Лыжи */}
    <path d="M35 45 L20 68" stroke="rgba(0,0,0,0.6)" strokeWidth="5" strokeLinecap="round" />
    <path d="M52 45 L58 68" stroke="rgba(0,0,0,0.6)" strokeWidth="5" strokeLinecap="round" />
  </svg>
)
