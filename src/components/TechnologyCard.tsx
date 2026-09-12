import type { Technology } from '../type'

interface TechnologyCardProps {
  technology: Technology
  added: boolean
  onAdd: (technology: Technology) => void
}

function TechnologyCard({ technology, added, onAdd }: TechnologyCardProps) {
  return (
    <article className="min-h-[154px] sm:min-h-0 rounded-xl border border-slate-200/80 bg-white shadow-[0_5px_18px_rgba(15,23,42,0.045)] flex flex-col p-3">
      <div className="flex items-start justify-between gap-2">
        <img src={technology.icon} alt="" className="h-7 w-7 object-contain" />
        <span className="rounded-full bg-sky-50 px-2 py-1 text-[8px] font-medium text-sky-600">{technology.badge}</span>
      </div>

      <h3 className="mt-2 text-[13px] font-bold text-slate-900">{technology.name}</h3>
      <p className="mt-1 min-h-[36px] text-[9px] leading-[1.55] text-slate-500">{technology.description}</p>

      <div className="mt-auto pt-2">
        <div className="flex items-center justify-between text-[8px] text-slate-500">
          <span className="rounded bg-slate-50 px-1.5 py-1">{technology.category}</span>
          <span>{technology.difficulty}</span>
          <span className="font-semibold text-slate-600">★ {technology.rating}</span>
        </div>
        <button
          onClick={() => onAdd(technology)}
          disabled={added}
          className={`mt-2 w-full rounded-md px-3 py-2 text-[9px] font-semibold text-white ${added ? 'cursor-not-allowed bg-slate-400' : 'bg-slate-950 hover:bg-slate-800'}`}
        >
          {added ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  )
}

export default TechnologyCard
