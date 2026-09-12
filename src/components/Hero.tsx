function Hero() {
  return (
    <section id="home" className="bg-[radial-gradient(circle_at_70%_35%,rgba(255,76,170,0.08),transparent_35%),radial-gradient(circle_at_55%_55%,rgba(99,102,241,0.07),transparent_34%)] border-b border-slate-100">
      <div className="mx-auto w-full max-w-[1160px] px-5 grid min-h-[470px] items-center gap-8 py-14 md:grid-cols-2 md:py-16">
        <div>
          <h1 className="max-w-[560px] text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 md:text-5xl">
            Build Your Ideal <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-[520px] text-sm leading-6 text-slate-500 md:text-[15px]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#technologies" className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 rounded-full px-5 py-3 text-xs font-bold text-white shadow-sm">Explore Technologies</a>
            <a href="#about" className="rounded-full border border-slate-300 px-5 py-3 text-xs font-bold text-slate-700">Learn More</a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src="/assets/dev-stack-banner.png" alt="Development stack illustration" className="w-[290px] md:w-[410px]" />
        </div>
      </div>
    </section>
  )
}

export default Hero
