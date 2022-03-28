import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Home from './Components/Home';
// import { Chart } from 'react-chartjs-2';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (localStorage.getItem("isLogin") != null)
      setIsLogin(localStorage.getItem("isLogin"));
  }, []);

  const logout = () => {
    localStorage.setItem("isLogin", false);
    setIsLogin(false);
  }

  const state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  const componentDidMount = () => {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  const callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!this.state.post) {
      this.setState({ responseToPost: "" })
      alert("Enter Some Message")
      return
    }
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  if (!isLogin)
    return (
      <div className="App">
        <Login setIsLogin={setIsLogin} setUserDetails={setUserDetails} />
      </div>
    )
  else {
    localStorage.setItem("isLogin", true);
    return <Home userDetails={userDetails} logoutUser={logout} />
  }
}

export default App;