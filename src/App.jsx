import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer.jsx";
import StepTwo from "./components/Steptwo.jsx";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  // affichage d'une erreur ou non
  const [showError, SetShowError] = useState(false);

  // fonction déclenchée a la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // si le formulaire est validé on renvoit les résultats
    if (handleSubmit === true) {
      return <StepTwo />;
    }
    // si le mot de passe et la confirmation de mot de passe ne sont pas identique retourner une erreur
    if (password !== confirmPassword || password.length < 10) {
      SetShowError(true);

      alert("Mot de passe inconnu");

      return;
    } else {
      SetShowError(false);
      alert("Formulaire validé");
    }
    //
  };
  return (
    <>
      <h2>Create Account</h2>
      <form
        className="form"
        // onSubmit sera déclenché lors du clique sur un bouton ou un input de type submit présent dans mon form
        onSubmit={handleSubmit}
      >
        Username
        <input
          type="text"
          value={username}
          placeholder="Jean Dupont"
          name="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />{" "}
        Mail
        <input
          value={email}
          type="email"
          placeholder="Jean.dupont@mail.com"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        Password
        <input
          type="password"
          value={password}
          placeholder="azerTy123456"
          name="password"
          onChange={(event) => {
            SetPassword(event.target.value);
          }}
        />
        Confirm your password
        <input
          type="password"
          value={confirmPassword}
          placeholder="abcdef987654"
          name="password"
          onChange={(event) => {
            SetConfirmPassword(event.target.value);
          }}
        />
        <input type="submit" value="Register" />
      </form>

      <Footer />
    </>
  );
}

export default App;
