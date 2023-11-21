import React from 'react'
import { Routes, Route} from "react-router-dom"
import CreateBook from './pages/CreateBooks'
import ShowBook from './pages/ShowBook'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'

const App = () => {
  return (
    <Routes>
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/book/details/:id" element={<ShowBook />} />
      <Route path="/" element={<Home />} />
      <Route path="/book/delete/:id" element={<DeleteBook />} />
      <Route path="/book/edit/:id" element={<EditBook />} />
    </Routes>
  )
}

export default App