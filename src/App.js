import Navbar from "./components/Navbar"
import Card from "./components/Card";
import data from "./data";
import "./style.css"

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )

    })
    return (
        <div className="container">
            <Navbar/>
            <div className="card-list">
                {cards}
            </div>
        </div>
    )
}

export default App;