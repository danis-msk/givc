import React from 'react'
import { Route } from 'react-router-dom'
import GroupList from './pages/GroupPage'
import StudentsList from './pages/StudentsPage'
import Header from './components/Header'
import ButtonAddItem from './components/ButtonAddItem'

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ButtonAddItem />
        <div className="content">
          <Route path="/" component={GroupList} exact />
          <Route path="/students-list" component={StudentsList} exact />
        </div>
      </div>
    </div>
  )
}

export default App
