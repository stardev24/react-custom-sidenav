  
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
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

      </p>
    </div>
  )

} 
function About(params) {
  return(
    <div>
      <h1>About</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

      </p>  
    </div>
  )

} 
function Users(params) {
  return(
    <div>
      <h1>Users</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
  )

} 

export default App
