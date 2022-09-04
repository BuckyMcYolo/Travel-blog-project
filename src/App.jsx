import "./Styles.css";
import Location from "./Location";
import locationData from "./data";
import Nav from "./Nav";

function App() {
  const vacas = locationData.map((item) => (
    <Location key={item.id} item={item} />
  ));

  return (
    <div>
      <Nav />
      {vacas}
    </div>
  );
}

export default App;
