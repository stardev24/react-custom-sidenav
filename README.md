# react-custom-sidenav
A library of React components created using `create-react-app` and material-ui.

# Installation
Run the following command:
`npm install react-custom-sidenav`


# How to use

```  
import React from "react";
import { SideNav } from "../lib";
import { Router, Route,Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

const history = createBrowserHistory();
class App extends  React.Component{

  render() {
      return(
        <Router  history={history}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                  <SideNav title="Custom Navbar"
                  menulinks={[{"name":"Home","icon":"fa fa-plus-circle fa-4","linkurl":"/home"},
                  {"name":"About","icon":"fa fa-info-circle fa-4","linkurl":"/about"},{"name":"Users","icon":"fa fa-user-circle fa-4","linkurl":"/users"}]} 
                  logo={{width:"50px",height:"50px",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7bYh95wcxKFLdLPI_wj55K1EKvLbhaz4dWxfoxw7AVjdaYKC",alt:"Brand"}}
                  appbar={{bgcolor:"primary"}}
                  history={history}
                  />
                  </Grid>
                  <Grid item xs={10} style={{ marginLeft: 100 }}>
                  <CssBaseline />
                      <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/users" component={Users} />
                      </Switch>                  

                </Grid>
              </Grid>      
            </Router>
      )
  }
};
function Home(params) {
  return(
    <div>
      <h1>Home</h1>
      <p>This is a home page</p>

      </p>
    </div>
  )

} 
function About(params) {
  return(
    <div>
      <h1>About</h1>
      <p>This is an about page</p>

      </p>  
    </div>
  )

} 
function Users(params) {
  return(
    <div>
      <h1>Users</h1>
      <p>This is users page</p>
      </p>
    </div>
  )

} 

export default App
```

# Required information

| Command | Description | Required
| --- | --- | --- |
| history | Used for dynamic routing | Yes
| menulink | Used for side navbar list items | Yes
| appbar.bgcolor | Used for top app bar color(Primary,Secondary,Default) | No
| menulink | Used for side navbar list items | Yes

history - Used for dynamic routing
menulink - Used for side navbar list items

This library will take font awesome icons for side navbar icons.To render navbar list item
Format given below as

{
    "name":Name of the navbar list item,
    "icon":font awesome icon class,
    "linkurl":react router path
    
}

Logo will be placed dynamically with in navbar
Format was given as

```
{
width:"50px",
height:"50px",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7bYh95wcxKFLdLPI_wj55K1EKvLbhaz4dWxfoxw7AVjdaYKC",
alt:"Brand"
}
```

