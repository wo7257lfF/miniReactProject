import { useState } from "react";
const tabs = [1, 2, 3, 4];
function App() {
  const [selectedTab, setSelectedTab] = useState(1);
  const tabClick = (e) => {
    setSelectedTab(e);
  };
  return (
    <div>
      {tabs.map((tab) => (
        <button
          style={{ backgroundColor: tab == selectedTab ? "blue" : "aqua" }}
          onClick={() => tabClick(tab)}
        >
          tab {tab}
        </button>
      ))}
      <div>content {selectedTab}</div>
    </div>
  );
}

export default App;
