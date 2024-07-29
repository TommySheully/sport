import './App.css'
import { Button } from '@mui/base'
import Header from '@/components/Header.tsx'

function App() {

  return (
    <>
      <Header />
      <Button className="bg-green-600 rounded-md py-1 px-4">Create Repository</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
