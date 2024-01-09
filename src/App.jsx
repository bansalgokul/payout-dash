import Navbar from "./Navbar"
import Header from "./Header"
import Hero from "./Hero"

function App() {
	return (
		<div className="bg-[#FAFAFA] w-full min-h-screen flex">
			<Navbar />
			<div className="w-full h-full flex flex-col">
				<Header />
				<Hero />
			</div>
		</div>
	)
}

export default App
