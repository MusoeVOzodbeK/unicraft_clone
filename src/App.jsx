import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from "./Components/Pages/Home/Home"
import Platforma from "./Components/Pages/Platforma/Platforma" 
import Tariflar from "./Components/Pages/Tariflar/Tariflar" 
import Kompaniya from "./Components/Pages/Kompaniya/Kompaniya" 
import Quvatlash from "./Components/Pages/Qolab-quvatlash/Quvatlash" 
import Blog from './Components/Pages/Blog/Blog'
function App() {
  return (
	<BrowserRouter>
	<Routes>
		<Route path='/' element={<Layout/>}>
			<Route index element={<Home/>}/>
			<Route path='platforma' element={<Platforma/>}/>
			<Route path='tariflar' element={<Tariflar/>}/>
			<Route path='kompaniya' element={<Kompaniya/>}/>
			<Route path='quvatlash' element={<Quvatlash/>}/>
			<Route path='blog' element={<Blog/>}/>
		</Route> 
	</Routes>
	</BrowserRouter>
  )
}

export default App
