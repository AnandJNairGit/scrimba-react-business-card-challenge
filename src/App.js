import "./App.css";
import Profile from "./components/Profile";
import ProfileDetail from "./components/ProfileDetails";
import ProfileFooter from "./components/ProfileFooter";

function App() {
  return (
    <main>
      <div className="container">
        <Profile />
        <ProfileDetail />
        <ProfileFooter />
      </div>
    </main>
  );
}

export default App;
