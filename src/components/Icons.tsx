interface IconProps {
  className?: string
}

// Обучение - Математика 2+2
export const SkiIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Фон для лучшей видимости */}
    <rect x="8" y="24" width="48" height="16" rx="4" fill="rgba(255, 255, 255, 0.05)" />
    <text
      x="32"
      y="36"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="rgba(232, 212, 200, 0.95)"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
      fontSize="22"
      fontWeight="700"
      letterSpacing="-0.5"
    >
      2+2=4
    </text>
  </svg>
)

// Лекции - Видеокамера
export const BookIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="22" width="28" height="20" rx="3" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="30" cy="32" r="8" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 28 28 L 28 36 L 35 32 Z" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="24" y="18" width="12" height="4" rx="1" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 44 27 L 48 24 L 48 40 L 44 37" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Курсы - Диплом
export const GraduationIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 18 20 L 46 20 C 47 20 48 21 48 22 L 48 42 C 48 43 47 44 46 44 L 18 44 C 17 44 16 43 16 42 L 16 22 C 16 21 17 20 18 20 Z" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 16 20 Q 14 22 16 24" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 16 40 Q 14 42 16 44" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <ellipse cx="32" cy="44" rx="8" ry="3" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 28 47 L 26 54 L 28 52 L 30 54" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 36 47 L 38 54 L 36 52 L 34 54" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="22" y1="28" x2="42" y2="28" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="22" y1="34" x2="42" y2="34" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="26" y1="40" x2="38" y2="40" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// План - Календарь
export const ClipboardIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="18" width="32" height="32" rx="3" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="24" y1="14" x2="24" y2="22" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="40" y1="14" x2="40" y2="22" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="16" y1="26" x2="48" y2="26" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="26" x2="24" y2="50" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="32" y1="26" x2="32" y2="50" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="40" y1="26" x2="40" y2="50" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="34" x2="48" y2="34" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="42" x2="48" y2="42" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="30" r="1.5" fill="rgba(232, 212, 200, 0.85)"/>
    <circle cx="36" cy="38" r="1.5" fill="rgba(232, 212, 200, 0.85)"/>
    <circle cx="28" cy="46" r="1.5" fill="rgba(232, 212, 200, 0.85)"/>
  </svg>
)

// Магазин - Сумка
export const ShoppingIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 18 26 L 46 26 L 48 46 C 48 48 46 50 44 50 L 20 50 C 18 50 16 48 16 46 Z" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="22" y1="26" x2="22" y2="22" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="42" y1="26" x2="42" y2="22" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M 22 22 L 26 18 L 38 18 L 42 22" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 18 32 L 16 32 C 15 32 14 33 14 34 L 14 40 C 14 41 15 42 16 42 L 18 42" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="28" y1="34" x2="36" y2="34" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="32" y1="32" x2="32" y2="36" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="32" y1="26" x2="32" y2="50" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Сбор - Горы
export const MountainIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 12 46 L 28 22 L 38 38 L 52 46" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 8 46 L 32 14 L 56 46" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="32" y1="14" x2="32" y2="8" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 32 8 L 40 10 L 32 12" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="8" y1="46" x2="56" y2="46" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="14" r="2" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="1.5"/>
    <circle cx="28" cy="22" r="1.5" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="1.5"/>
  </svg>
)

// Инвентарь - Лыжи
export const EquipmentIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 18 48 L 28 12 L 30 12 L 20 48 Z" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 46 48 L 36 12 L 34 12 L 44 48 Z" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="24" y1="48" x2="38" y2="16" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="38" cy="16" r="2" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2"/>
    <line x1="22" y1="48" x2="26" y2="48" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="40" y1="48" x2="26" y2="16" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="26" cy="16" r="2" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2"/>
    <line x1="38" y1="48" x2="42" y2="48" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)

// Лыжник
export const SkierIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="18" r="5" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 35 23 L 32 35" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 32 27 L 28 25 L 25 28" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 33 28 L 38 26 L 42 30" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 32 35 L 28 42 L 26 48" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 33 35 L 36 42 L 38 48" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="18" y1="50" x2="28" y2="46" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="30" y1="50" x2="42" y2="46" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="25" y1="28" x2="20" y2="45" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="42" y1="30" x2="46" y2="46" stroke="rgba(232, 212, 200, 0.85)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)
