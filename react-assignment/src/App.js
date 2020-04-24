import React from 'react';
import logo from './logo.svg';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Todo from "../src/components/Todo"
import Particles from 'react-particles-js';
function App() {
  return (
      <div className="container" >
        <div >
          <Todo />
        </div>
          <Particles
              params={{
                  particles: {
                      line_linked: {
                          shadow: {
                              enable: true,
                              color: "#3CA9D1",
                              blur: 5
                          }
                      }
                  }
              }}
              style={{
                  width: '100%',

              }}
          />
          <footer className="page-footer font-small" >


              <div className="footer-copyright text-right py-3" style={{color:"white"}}>© 2020 Copyright: Created by V.D Dantanarayana IT18026962
                  <a href="https://courseweb.sliit.lk/"> Courseweb.com</a>
              </div>


          </footer>
      </div>
  );
}

export default App;
