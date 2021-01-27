import React from 'react'
import { Route } from 'react-router-dom'
import GroupList from './pages/GroupList'
import StudentsList from './pages/StudentsList'
import Header from './components/Header'
import ButtonAddItem from './components/ButtonAddItem'

function App() {

  // удалить пункт списка
  const deleteItem = (key, value) => {
    const items = JSON.parse(localStorage.getItem(key))
    const newItems = items.filter(item => item['id'] !== value)
    localStorage.setItem(key, JSON.stringify(newItems))
  }
  
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ButtonAddItem />
        <div className="content">
          <Route path="/" exact>
            <GroupList deleteItem={deleteItem} />
          </Route>
          <Route path="/students-list" exact>
            <StudentsList deleteItem={deleteItem} />
          </Route>
        </div>
      </div>
    </div>
  )
}

export default App
