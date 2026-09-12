import { Suspense, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Loading from './components/Loading'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import type { Technology } from './type'

const technologiesPromise = async (): Promise<Technology[]> => {
  const response: Response = await fetch('/data/technologies.json')
  const data: Technology[] = await response.json()
  return data
}

function App() {
  const [stack, setStack] = useState<Technology[]>([])

  const addToStack = (technology: Technology): void => {
    if (stack.some((item: Technology) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }
    setStack((oldStack: Technology[]) => [...oldStack, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (id: string): void => {
    const item: Technology | undefined = stack.find((technology: Technology) => technology.id === id)
    setStack((oldStack: Technology[]) => oldStack.filter((technology: Technology) => technology.id !== id))
    if (item) toast.info(`${item.name} removed from your stack.`)
  }

  const removeAll = (): void => {
    if (!stack.length) return
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<Loading />}>
        <Technologies technologiesPromise={technologiesPromise()} stack={stack} onAdd={addToStack} onRemove={removeFromStack} onRemoveAll={removeAll} />
      </Suspense>
      
      <Footer />
      <ToastContainer position="top-right" autoClose={2200} />
    </>
  )
}

export default App
