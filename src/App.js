import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Colors from './components/Colors';
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'




const items =[
  {
    title: 'This is an accordian',
    content: 'Made through React'
  },
  {
    title: 'Widgets',
    content: 'application'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating components'
  }
]



export default () => {


  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Colors />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}