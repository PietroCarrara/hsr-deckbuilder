import { lightCones } from "./data/light-cones";

function App() {
  return <pre>{JSON.stringify(lightCones, undefined, 2)}</pre>;
}

export default App;
