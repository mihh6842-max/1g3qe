interface IconProps {
  className?: string
}

// Классический стиль - доска с базовыми примерами
export const ClassicBoardIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="whiteShadow">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="white" floodOpacity="0.8"/>
      </filter>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* Доска */}
    <rect x="10" y="18" width="60" height="44" rx="4" fill="white" opacity="0.95" filter="url(#whiteShadow)" />
    <rect x="10" y="18" width="60" height="44" rx="4" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
    {/* Рамка */}
    <rect x="13" y="21" width="54" height="38" rx="2" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
    {/* Текст "ABC" */}
    <text x="25" y="38" fontFamily="serif" fontSize="18" fontWeight="bold" fill="white" opacity="0.9" filter="url(#glow)">ABC</text>
    {/* Стрелки ходов */}
    <path d="M20 48 L28 48 M24 45 L28 48 L24 51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    <path d="M35 48 L43 48 M39 45 L43 48 L39 51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    {/* Числа */}
    <text x="52" y="38" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="white" opacity="0.85">1→2</text>
    <text x="52" y="52" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="white" opacity="0.85">3→4</text>
    {/* Мел */}
    <rect x="15" y="56" width="8" height="3" rx="1.5" fill="white" opacity="0.9" filter="url(#whiteShadow)" />
    {/* Блики */}
    <circle cx="20" cy="25" r="4" fill="white" opacity="0.4" />
  </svg>
)

// Коньковый стиль - доска с динамичными элементами
export const SkateBoardIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="whiteShadow">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="white" floodOpacity="0.8"/>
      </filter>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* Доска */}
    <rect x="10" y="18" width="60" height="44" rx="4" fill="white" opacity="0.95" filter="url(#whiteShadow)" />
    <rect x="10" y="18" width="60" height="44" rx="4" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
    {/* Рамка */}
    <rect x="13" y="21" width="54" height="38" rx="2" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
    {/* Диагональные стрелки (коньковый ход) */}
    <path d="M20 35 L32 28 M28 26 L32 28 L30 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" filter="url(#glow)" />
    <path d="M48 35 L60 28 M56 26 L60 28 L58 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" filter="url(#glow)" />
    {/* V-образная форма */}
    <path d="M30 48 L40 38 L50 48" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" fill="none" />
    {/* Текст */}
    <text x="22" y="54" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="white" opacity="0.85">V-step</text>
    {/* Звездочка движения */}
    <path d="M55 48 L56 51 L59 51 L57 53 L58 56 L55 54 L52 56 L53 53 L51 51 L54 51 Z" fill="white" opacity="0.8" filter="url(#glow)" />
    {/* Губка */}
    <rect x="56" y="55" width="10" height="5" rx="2" fill="white" opacity="0.7" />
    {/* Блики */}
    <circle cx="20" cy="25" r="4" fill="white" opacity="0.4" />
  </svg>
)
