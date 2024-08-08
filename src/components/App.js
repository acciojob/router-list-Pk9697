import React from 'react'
import './../styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemList from '../pages/ItemList'
import ItemDetail from '../pages/ItemDetail'

const items = [
	{
		id: 1,
		name: 'Item 1',
		description: 'Description for Item 1',
	},
	{
		id: 2,
		name: 'Item 2',
		description: 'Description for Item 2',
	},
	{
		id: 3,
		name: 'Item 3',
		description: 'Description for Item 3',
	},
]

const App = () => {
  return <div>{/* Do not remove the main div */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList items={items} />} />
        <Route path="/items/:id" element={<ItemDetail items={items}/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
