import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Widget from "./Components/Widget";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widget />
      </div>
    </div>
  );
}

export default App;
