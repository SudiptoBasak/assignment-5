import { useState } from 'react'

function Nav() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto w-full max-w-[1160px] px-5 flex h-[68px] items-center justify-between gap-6">
        <a href="#home" className="hidden items-center gap-2 font-bold text-slate-900 md:flex">
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex h-7 w-7 items-center justify-center rounded-md text-xs font-black text-white">DS</span>
          <span className="text-[15px]">Dev Stack</span>
        </a>

        <div className="hidden items-center gap-7 text-[13px] text-slate-600 md:flex">
          <a href="#home" className="hover:text-slate-950">Home</a>
          <a href="#technologies" className="hover:text-slate-950">Technologies</a>
          <a href="#projects" className="hover:text-slate-950">Projects</a>
          <a href="#about" className="hover:text-slate-950">About</a>
          <a href="#contact" className="hover:text-slate-950">Contact</a>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button className="rounded-full px-4 py-2 text-xs font-medium text-slate-600">Sign In</button>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 rounded-full px-5 py-2 text-xs font-semibold text-white">Sign Up</button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Open menu" className="rounded-md p-2 text-lg text-slate-800">☰</button>
          <a href="#home" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 font-bold text-slate-900">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex h-6 w-6 items-center justify-center rounded-md text-[8px] font-black text-white">DS</span>
            <span className="text-[12px]">Dev Stack</span>
          </a>
          <div className="ml-auto flex items-center gap-1">
            <button className="rounded-full px-2 py-2 text-[9px] font-medium text-slate-600">Sign In</button>
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 rounded-full px-3 py-2 text-[9px] font-semibold text-white">Sign Up</button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="mx-auto w-full max-w-[1160px] px-5 flex flex-col gap-3 py-4 text-sm text-slate-600">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#technologies" onClick={() => setOpen(false)}>Technologies</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav
