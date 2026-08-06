
import { Routes, Route } from 'react-router-dom'
import { Maincontent } from "./pages/Landing"
import { Signin } from "./pages/signin"
import { Signup } from "./pages/signup"
import { Dashboard } from './pages/dashboard'
import { Layout } from './components/layout'
import { Pin } from './pages/pin'
import { ErrorPage } from './pages/error'
import { Youtube } from './pages/youtube'
import { Twitter } from './pages/twitter'
import { Todo } from './pages/todo'
import { Loading } from './components/loading'
import { MailFilter } from './pages/mailfilter'
import { Uploadavatar } from './pages/uploadavatar'
import { Aidayplanner } from './pages/aidayplanner'
import { SharedBrain } from './pages/sharedbrain'
import './index.css'

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes without Navbar/Sidebar */}
        <Route path="/" element={<Maincontent />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/brain/:hash" element={<SharedBrain />} />

        {/* Protected/Dashboard Routes with Common Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Pin />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/planner" element={<Aidayplanner />} />
          {/* <Route path="/notifications" element={<NotificationPage />} /> */}
          <Route path="/profile" element={<Uploadavatar />} />
          <Route path="/mailfilter" element={<MailFilter />} />
         
        </Route>

        {/* Catch-all Route for 404 Error Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

// App.tsx


export default App
