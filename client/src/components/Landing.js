import React from 'react';


export const LandingPage = () => {
  
  return (
    <div>
      <h1>Landing Page for Unauthorized Users</h1>
      <br />
      <br />
    
      </div>
  );
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  //constructor(props) {
  //  super(props)
  //  this.state = {
  //    bananasReceived: "",
  //    email: "",
  //    password: ""
  //  }
  //  this.getBananas = this.getBananas.bind(this)
  //}
  
 

  //handleEmailChange = event => {
  //  this.setState({
  //    email: event.target.value
  //  })
  //}
 //
  //handlePasswordChange = event => {
  //  this.setState({
  //    password: event.target.value
  //  })
  //}
 //
  //handleSubmit = event => {
  //  event.preventDefault()
  //  let loginData = {"auth": {"email": this.state.email, "password": this.state.password}}
  //  let requestOptions = {
  //    method: 'POST',
  //    headers: { 'Content-Type': 'application/json' },
  //    body: JSON.stringify(loginData)
  //  }
  //  fetch('http://localhost:3000/api/user_token', requestOptions)
  //  .then(res => res.json())
  //  .then(result => {
  //    console.log(result)
  //    localStorage.setItem("jwt", result.jwt)
  //    this.setState({
  //      email: '',
  //      password: ''
  //    });
  //  }) 
//
  //}

  //does the fetch work without the localhost:3000?



  //getBananas = (admin) => {
  //  let token = "Bearer " + localStorage.getItem("jwt")
  //  console.log(token)
  //  let url = ""
  //  url = admin ? 'http://localhost:3000/api/bananas' : 'http://localhost:3000/api/bananas/1'
  //  fetch(url, {
  //    method: 'GET',
  //    headers: {
  //      Authorization: token
  //    }
  //  })
  //  .then(res => res.json())
  //  .then(bananas => {
  //    console.log(bananas)
  //    this.setState({bananasReceived: JSON.stringify(bananas)})
  //  })
  //}




//render() {
//  return (
//    <div className="App">
//      <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
//        Banana Management System
//      </h1>
//      <form onSubmit={event => this.handleSubmit(event)}>
//        <label htmlFor="email">Email: </label>
//        <br />
//        <input
//          name="email"
//          id="email"
//          type="email"
//          onChange={event => this.handleEmailChange(event)}
//          value={this.state.email}
//        />
//        <br /><br />
//        <label htmlFor="password">Password:</label>
//        <br />
//        <input
//          name="password"
//          id="password"
//          type="password"
//          onChange={event => this.handlePasswordChange(event)}
//          value={this.state.password}
//        />
//        <br />
//        <input type="submit" value="Submit" />
//        </form>
//        <br />
//      <br />
//      <button
//        onClick={() => { this.getBananas(false) }}
//        style={{marginTop: "10vh"}}
//        >
//        Get One Banana
//      </button>
//      <br />
//      <button
//        onClick={() => { this.getBananas(true) }}
//        style={{marginTop: "2vh"}}
//        >
//        Get Bananas
//      </button>
//      <p>{this.state.bananasReceived}</p>
//    </div>
//  );
//}
//
//}
//export default App