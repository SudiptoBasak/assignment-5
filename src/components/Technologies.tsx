import { use } from 'react'
import TechnologyCard from './TechnologyCard'
import Stack from './Stack'
import type { Technology } from '../type'

interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>
  stack: Technology[]
  onAdd: (technology: Technology) => void
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

function Technologies({ technologiesPromise, stack, onAdd, onRemove, onRemoveAll }: TechnologiesProps) {
  const technologies: Technology[] = use(technologiesPromise)

  return (
    <section id="technologies" className="mx-auto w-full max-w-[1160px] px-5 py-14">
      <div className="mb-7 ">
        
        <h2 className="mt-2 text-2xl font-extrabold  text-slate-950 md:text-3xl">
          Explore <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent ">Technologies</span>
        </h2>
        <p className=" mt-2 max-w-xl text-xs leading-5 text-slate-500">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_190px]">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology: Technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              added={stack.some((item: Technology) => item.id === technology.id)}
              onAdd={onAdd}
            />
          ))}
        </div>
        <Stack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  )
}

export default Technologies
