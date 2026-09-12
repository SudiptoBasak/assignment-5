function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white text-slate-900">
      <div className="mx-auto w-full max-w-[1160px] px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div id="projects">
            <div className="flex items-center gap-2 font-bold">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-[9px] font-black text-white">
                DS
              </span>
              <span>Dev Stack</span>
            </div>

            <p className="mt-3 max-w-xs text-xs leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex gap-4 text-xs text-slate-500">
              <a href="https://github.com" target="_blank" className="hover:text-slate-900">GitHub</a>
              <a href="https://twitter.com" target="_blank"  className="hover:text-slate-900">Twitter</a>
              <a href="https://linkedin.com" target="_blank"  className="hover:text-slate-900">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold">Product</h3>
            <div className="mt-3 space-y-2 text-xs text-slate-500">
              <a href="#technologies" className="block hover:text-slate-900">Home</a>
              <a href="#stack" className="block hover:text-slate-900">Technologies</a>
              <a href="#technologies" className="block hover:text-slate-900">Projects</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold">Company</h3>
            <div className="mt-3 space-y-2 text-xs text-slate-500">
              <a href="#about" className="block hover:text-slate-900">About</a>
              <a href="#projects" className="block hover:text-slate-900">Contact</a>
              <a href="#contact" className="block hover:text-slate-900">Carrers</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold">Legal</h3>
            <div className="mt-3 space-y-2 text-xs text-slate-500">
              <a href="#" className="block hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="block hover:text-slate-900">Terms Of Services</a>
              
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-4 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
