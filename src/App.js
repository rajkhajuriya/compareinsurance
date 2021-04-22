import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Aboutus from './screens/aboutus'
import ContactUs from './screens/contactUs'
import Car from './screens/car'
import Home from './screens/Home'
import Health from './screens/health'
import Term from './screens/term'
import Investment from './screens/investments'
import Travel from './screens/travel'
import Bike from './screens/bike'
import Categories from './screens/categories'

export default function App() {
  return (

    <React.Fragment>
      <Route path="/home" component={Home} exact />
      <Route path="/categories" component={Categories} exact />
      <Route path="/" component={Home} exact />
      <Route path="/contactus" component={ContactUs} exact />
      <Route path="/aboutus" component={Aboutus} exact />
      <Route path="/car" component={Car} exact />
      <Route path="/health" component={Health} exact />
      <Route path="/term" component={Term} exact />
      <Route path="/investment" component={Investment} exact />
      <Route path="/travel" component={Travel} exact />
      <Route path="/bike" component={Bike} exact />
    </React.Fragment>



  )
}
