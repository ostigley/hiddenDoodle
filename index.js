import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import PageContainer from './components/page-container.js'
import Section from './components/section.js'

const ids = [1,2,3]

render(
  <PageContainer/>,
  document.querySelector('body'))
console.log('welcome to hiddenDoodle')


// render section 3 times with 3 ids
