import "./App.css";
import Profile from "./components/Profile";
import ProfileDetail from "./components/ProfileDetails";

function App() {
  return (
    <main>
      <div className="container">
        <Profile />
        <ProfileDetail />
      </div>
    </main>
  );
}

export default App;
