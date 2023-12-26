import { useState } from "react";
import Btn from "./Btn";

function App() {
  const [color, setColor] = useState("beige");
  return (
    <div
      className="w-full h-screen flex justify-end duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-4 py-2 rounded-3xl">
          <Btn setColor={setColor} textColor="white" btnBgColor="Red" />
          <Btn setColor={setColor} textColor="white" btnBgColor="Green" />
          <Btn setColor={setColor} textColor="white" btnBgColor="Olive" />
          <Btn setColor={setColor} textColor="white" btnBgColor="Gray" />
          <Btn setColor={setColor} textColor="black" btnBgColor="Yellow" />
          <Btn setColor={setColor} textColor="black" btnBgColor="Pink" />
          <Btn setColor={setColor} textColor="white" btnBgColor="Purple" />
          <Btn setColor={setColor} textColor="black" btnBgColor="Lavender" />
          <Btn setColor={setColor} textColor="black" btnBgColor="White" />
          <Btn setColor={setColor} textColor="white" btnBgColor="Black" />
        </div>
      </div>
    </div>
  );
}

export default App;
