import "./App.module.scss";
import Router from "./router/Router";
import useUserStore from "./common/store/useUserStore";

function App() {
  const { isAdmin, currentUser } = useUserStore();
  return <Router />;
}

export default App;
