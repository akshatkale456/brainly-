
import { Routes, Route } from 'react-router-dom'
import { Maincontent } from "./pages/Landing"
import { Signin } from "./pages/signin"
import { Signup } from "./pages/signup"
import { Dashboard } from './pages/userdashboard'
import { Layout } from './components/layout'
import { Chat } from './pages/chat'
import { ErrorPage } from './pages/error'
import { Youtube } from './pages/youtube'
import { Twitter } from './pages/twitter'
import { Todo } from './pages/todo'
import { Loading } from './components/loading'
import { Pdf } from './pages/pdf'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes without Navbar/Sidebar */}
        <Route path="/" element={<Maincontent />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/loading" element={<Loading/>} />

        {/* Protected/Dashboard Routes with Common Layout */}
        <Route element={<Layout />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/chat" element={<Chat />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/todo" element={<Todo />} />
          
         
        </Route>

        {/* Catch-all Route for 404 Error Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

//   interface score  {
//   high:number,
//   medium:number,
//   low:number,
// }
// interface todo {
//    title: string
//    id?:number,
//    compelete?:boolean
//    priority?:"high"|"low"|"medium"
// }

// let todos:todo[] =  []
// function App() {
//   let dashref = useRef<HTMLInputElement>(null)
//   let proref = useRef<HTMLSelectElement>(null)
//   const [ todo , settodo] = useState(todos);
//   function add(){



// if( dashref.current === null){
//   console.log( "you are not put any todos")
// }
// else if(proref.current === null){
// console.log( "you are not put any todos")
// }
// else{
//   const  newtodo:todo = {
//     title:dashref.current.value,
//     id: Date.now(),
//     priority:proref.current.value as "high"|"low"|"medium"


//   }
//   settodo((prevTodos)=>{
//     const updated = [...prevTodos, newtodo]
//      return sort(updated)


//   })
//   dashref.current.value = '';
//   proref.current.value = 'low';
// }

// }
// function sort(todo:todo[]){
//   todo.sort((a,b)=>{
//     const score:score = {
//   high:3,
//   medium:2,
//   low:1,}
//     const dasha = score[a.priority||"low"]
//     const dashB = score[b.priority||"low"]  
//       return dasha - dashB
//    }

// )
//  return todo
// }

//  function doe (id:number){

//   settodo( (todo)=>
//   { return todo.filter((a)=>{
//     a.id === id 
//   } )

//   })

//  }


// console.log( todo )

//   return (<div>

//  <input type="text" placeholder="type your title" ref = {dashref} /> 
//  <select ref = {proref}>
//   <option>
//     high
//   </option>
//   <option>
//     low
//   </option>
//   <option>
//     medium
//   </option>
//  </select>

//  <div>
// <button onClick={add}>
//   add
// </button>
//   </div> 
//   <div>
//     {todo.map((item) => {
//           return (
//             <div >
//               <h3>Title: {item.title}</h3>

//               <p>
//                 priority:{item.priority}
//               </p>

//                 <button onClick={() => {
//     // Only call deletodo if item.id is not undefined/null
//     if (item.id !== undefined) {
//         doe(item.id);
//     }
// }}>
//     delete
// </button>

//             </div>
//           )
//         })}
//   </div>
//   </div>
// )}}

export default App
