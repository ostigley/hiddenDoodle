import React, { Component } from 'react'
import Section from './section.js'

const ids = [1,2,3]

module.exports = () => (
  <main className="container">
    <h1>hi</h1>
     {ids.map( (iditem) => {
        return <Section id={iditem} />
    })}
  </main>
)
