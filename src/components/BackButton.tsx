import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-4 left-4 z-50 backdrop-blur-2xl bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-5 rounded-2xl border border-white/30 shadow-2xl hover:shadow-orange-500/30 hover:scale-105 transition-all flex items-center gap-2 group"
    >
      <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
      <span>Назад</span>
    </button>
  )
}
