
import './App.css';
import { Container, Form , Button } from 'react-bootstrap';



const App = () => {
    return (
      <Container className='auth-inner'>
        <Form>
          <h1 align="center">Sign Up</h1>
          <div className="mb-3 div-padding">
            <div><label>First name</label></div>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3 div-padding">
            <div><label>Last name</label></div>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
          <div className="mb-3 div-padding">
            <div><label>Email address</label></div>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3 div-padding">
            <div><label>Password</label></div>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="div-padding">
            <Button className='custom-btn'>
              Sign Up
            </Button>
            
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </Form>
      </Container>
      
  )
}

export default App