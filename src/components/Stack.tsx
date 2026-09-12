import type { Technology } from '../type'

interface StackProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

function Stack({ stack, onRemove, onRemoveAll }: StackProps) {
  return (
    <aside id="stack" className="rounded-xl border border-slate-200/80 bg-white shadow-[0_5px_18px_rgba(15,23,42,0.045)] h-fit p-3 lg:sticky lg:top-24">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-900">Your Stack</h2>
          <p className="mt-1 text-[9px] text-slate-400">{stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected</p>
        </div>
        {stack.length > 0 && (
          <button onClick={onRemoveAll} className="text-[9px] font-medium text-rose-500 hover:text-rose-600">Remove All</button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="mt-3 flex h-[70px] items-center justify-center rounded-lg border border-dashed border-slate-200 text-[9px] text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-3 space-y-2">
          {stack.map((item: Technology) => (
            <div key={item.id} className="flex items-center gap-2 rounded-lg border border-slate-100 p-2">
              <img src={item.icon} alt="" className="h-6 w-6 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-semibold text-slate-800">{item.name}</p>
                <p className="text-[8px] text-slate-400">{item.category}</p>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-sm text-slate-400 hover:text-rose-500" aria-label={`Remove ${item.name}`}>×</button>
            </div>
          ))}
        </div>
      )}
    </aside>
  )
}

export default Stack
