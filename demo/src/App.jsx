import ArrayRendering from "./components/ArrayRendering"
import Clock from "./components/Clock"
import ConditionalRendering1 from "./components/ConditionalRendering1"
import ConditionRendering from "./components/ConditionRendering"
import EventListner from "./components/EventListner"
import First from "./components/First"
import Fourth from "./components/Fourth"
import GreaterThree from "./components/GreaterThree"
import Greet from "./components/Greet"
import MapFilterExample from "./components/MapFilterExample"
import ObjectAddExa from "./components/ObjectAddExa"
import ObjectState from "./components/ObjectState"
import Props from "./components/Props"
import Props2 from "./components/Props2"
import PropsAddition from "./components/PropsAddition"
import PropsFactorial from "./components/PropsFactorial"
import PropsSquare from "./components/PropsSquare"
import Second from "./components/Second"
import StateCalculator from "./components/StateCalculator"
import StateDemo from "./components/StateDemo"
import StateExamplle from "./components/StateExamplle"
import StateForm from "./components/StateForm"
import StatePractice from "./components/StatePractice"
import StateStuMarksheet from "./components/StateStuMarksheet"
import Third from "./components/Third"
import ValidationForm from "./components/ValidationForm"
import ValidationForm2 from "./components/ValidationForm2"
import A from './components/A'
import UseMemoFun from "./components/UseMemoFun"
import HooksUseEffect from "./components/HooksUseEffect"
import { useState } from "react"
import UseRefHook from "./components/UseRefHook"

import{ Link,Navigate,Route ,Routes} from 'react-router-dom'
import Home1 from "./RoutingComponent/Home1"
import About from "./RoutingComponent/About"
import Contact from "./RoutingComponent/Contact"
import Service from "./RoutingComponent/Service"
import PageNotFound from "./RoutingComponent/PageNotFound"
import Admin from "./RoutingComponent/Admin"
import Profile from "./RoutingComponent/Profile"
import User from "./RoutingComponent/User"
import { useNavigate } from "react-router-dom"
import User1 from "./RoutingComponent/User1"
import Employee from "./RoutingComponent/Employee"
import Product from "./RoutingComponent/Product"
import Book from "./RoutingComponent/Book"
import Home from "./RoutingComponent/Home"
import EmployeeDetail from "./RoutingComponent/EmployeeDetail"


function App() {
 
   let a = 5
  let b = 3
  let name = "RINKI"

  let info = [
  {
    m1 : "50" ,
    m2 : "60" , 
    m3 : "70"
  },
  {
    m1 : "80" ,
    m2 : "90" , 
    m3 : "100"
  }

]
const [status , setStatus] = useState(true)

  const Navigate = useNavigate()

  const ClickHandler =()=>{
    Navigate('/service')
  }

  const Navigate1 = useNavigate()

  const ClickHandler1 =()=>{
    Navigate1('/user1')
  }
  // data show routing
  const Navigate2 = useNavigate()

  const ClickHandler2 =()=>{
    Navigate2('/user1')
  }
  // project

  const Navigate3 = useNavigate()

  const ClickHandler3 =()=>{
    Navigate3('/p')
  }
  const Navigate4 = useNavigate()

  const ClickHandler4 =()=>{
    Navigate4('/b')
  }

  const Navigate5 = useNavigate()

  const ClickHandler5=()=>{
    Navigate5('/e')
  }

  
  return (
    <>


    

      <div className='text-center'style={{  marginRight:"20px"}}>
      <h1>HELLO , {name}...</h1>
      <p>Today's Date : {new Date().toLocaleDateString()}</p>
      <p>Current time : {new Date().toLocaleTimeString()}</p>
      <p>Addition : {a} + {b} : {a+b}</p>
     </div> 
     

     

     <hr></hr>
     
     <First></First>

     <hr></hr>

     <Second></Second>

     <hr></hr>

     <Third></Third>

     <hr></hr>

     <Fourth></Fourth>

     <hr></hr>
     
     <ArrayRendering></ArrayRendering>

     <hr></hr>
    
    <MapFilterExample></MapFilterExample>

    <hr></hr>

    <Props Name="Kaveri" Age="23" College="BVCOEL"></Props>

    <hr></hr>

    <Props2 data = {info}></Props2>

    <hr></hr>

    <PropsAddition a="5" b="3"></PropsAddition>

    <hr></hr>

    <PropsSquare value="3"></PropsSquare>

    <hr></hr>

    <PropsFactorial value="5"></PropsFactorial>

    <hr></hr>

    <Greet></Greet>

    <hr></hr>

    <EventListner></EventListner>

    <hr></hr>

    <StateDemo></StateDemo>

    <hr></hr>

    <StateCalculator></StateCalculator>

    <hr></hr>

    <StateForm></StateForm>

    <hr></hr>

    <StateExamplle></StateExamplle>

    <hr></hr>

    <ConditionRendering></ConditionRendering>

    <hr></hr>
    <ConditionalRendering1></ConditionalRendering1>

    <hr></hr>

    <Clock></Clock>

    <hr></hr>
    <StatePractice></StatePractice>

    <hr></hr>
    <GreaterThree></GreaterThree>

    <hr></hr>
    <StateStuMarksheet></StateStuMarksheet>

    <hr></hr>
    <ObjectState></ObjectState>

    <hr></hr>
    <ObjectAddExa></ObjectAddExa>

    <hr></hr>
    <ValidationForm></ValidationForm>

    <hr></hr>
    <ValidationForm2></ValidationForm2>

    <hr></hr>
    <A></A>

    <hr></hr>
    <UseMemoFun></UseMemoFun>

    <hr></hr>
    <div className="text-center">
      <button className="btb btn-warning" onClick={()=>setStatus(!status)}>Toggle Button</button>

     </div>
    {status ? <HooksUseEffect></HooksUseEffect>:""}  

    <hr></hr>
    <UseRefHook></UseRefHook>

    <hr></hr>
 

         //Routing
    <div className="container text-center" >
      <Link to="home">Home1</Link>&nbsp;&nbsp;
      <Link to="about">About</Link>&nbsp;&nbsp;
      <Link to="contact">Contact</Link>&nbsp;&nbsp;
      <Link to="service">Service</Link>&nbsp;&nbsp; 
      <Link to="profile">Profile</Link>&nbsp;&nbsp; 
      <Link to="help">Help</Link>&nbsp;&nbsp; 
      <Link to="user1">User1</Link>&nbsp;&nbsp;
      </div>
      <br></br>
      <br></br>

<div style={{justifyContent:"center", display:"flex"}}>     
  
    <button className=' btn btn-outline-primary  text-center' onClick={ClickHandler}>Show Services</button>&nbsp;&nbsp;&nbsp;&nbsp;
       <button className="btn btn-outline-primary" onClick={ClickHandler1}>Show User</button>&nbsp;&nbsp;&nbsp;&nbsp;
       <button className="btn btn-outline-warning" onClick={ClickHandler2}>Show Users</button>

</div>
    <br></br>

       <Routes>
      <Route path="home" element={<Home1></Home1>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="contact"  element={<Contact></Contact>}></Route>
      <Route path="service" element={<Service></Service>} ></Route>
      <Route path="profile" element={<Profile></Profile>}>
        <Route path="admin" element={<Admin></Admin>}></Route>
        <Route path="user" element={<User></User>}></Route>
      </Route>
       <Route path="user1" element={<User1></User1>}></Route> 
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    <br></br>
    <hr></hr>
    
    //project
    <div className="container">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" too="">Web Application</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="h">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="p">Product</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="e">Employee</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="b">Book</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

      </header>
    </div>
    <br></br>

    <Routes>
      <Route path="h" element={<Home></Home>}></Route>
      <Route path="p" element={<Product></Product>}></Route>
      <Route path="e" element={<Employee></Employee>}></Route>
      <Route path="b" element={<Book></Book>}></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      <Route path="e/:id" element={<EmployeeDetail></EmployeeDetail>}></Route>
    </Routes>

    <br></br>
    <div style={{justifyContent:"center" , display:"flex"}}>
      <button className="btn btn-outline-primary" onClick={ClickHandler3}>Show Product</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-outline-warning" onClick={ClickHandler4}>Show Books</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-outline-success" onClick={ClickHandler5}>Show Employee</button>&nbsp;&nbsp;&nbsp;&nbsp;
      
    </div>

    </>
    

  )
}

export default App

