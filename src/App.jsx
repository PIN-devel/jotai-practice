import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import "./App.css";

// core Api
const textAtom = atom("init text");
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

// Extra utilities
const darkModeAtom = atomWithStorage("darkMode", false);

function App() {
  // core Api
  const [text, setText] = useAtom(textAtom);
  const [uppercaseText] = useAtom(uppercaseAtom);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Extra utilities
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={text} />
      <h4>Uppercase: {uppercaseText}</h4>

      <button onClick={toggleDarkMode}>darkmode button</button>
      {darkMode ? (
        <div
          style={{
            height: "100px",
            weight: "100%",
            backgroundColor: "black",
            color: "white",
          }}
        >
          content
        </div>
      ) : (
        <div style={{ height: "100px", weight: "100%" }}> content </div>
      )}
    </div>
  );
}

export default App;
