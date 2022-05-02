import { Widget } from './components/Widget'

interface ButtonProps {
  text: string
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text}</button>
}

function App() {
  return <Widget />
}

export default App
