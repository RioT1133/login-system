import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="login-box">
        <div className="input-field">
          <input type="textbox" id="username" name="username" placeholder="username"/>
          <input type="password" id="password" name="password" placeholder="password"/>
        </div>
        <div class="submit-button">
            <input type="button" id="login" value="log in"/>
        </div>
    </div>
    </div>
  );
}

export default App;
