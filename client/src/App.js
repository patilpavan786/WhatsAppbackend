import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

function App() {
  return (
    <GoogleOAuthProvider clientId="246648691460-bsj1rub53iami1btvii0577h1on2je01.apps.googleusercontent.com">
      <AccountProvider >
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
