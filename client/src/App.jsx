import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import Service from "./components/Service"
import Transcation from "./components/Transcation"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="min h-screen">
      <div className="gradient-bg-welcome">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
      <Service></Service>
      <Transcation></Transcation>
      <Footer></Footer>
    </div>
  )
}

export default App
