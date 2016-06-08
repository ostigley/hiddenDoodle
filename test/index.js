'use strict'
import React from 'react'
import { mount, shallow, render } from 'enzyme'
import { expect } from 'chai'

// import PageContainer from '../components/page-container.js'
import App from '../components/app.js'
import Section from '../components/section.js'
import Canvas from '../components/canvas.js'
import Cover from '../components/cover.js'
import Button from '../components/button.js'

describe('The app.js component', () => {
	const app = shallow(<App name="hiddenDoodle"/>)
	
	it('has the right heading', ()=> {
		expect(app.text())
			.to.equal('Welcome to hiddenDoodle')
	})

	it( 'has the right number of h1 tags', () => {
		expect(app.find('h1').length)
			.to.equal(1)
	})
})

// describe('The page-container.js component', () => {
// 	const pc = shallow(<PageContainer />)

// 	it('has three section components', () => {
// 		expect(pc.find('section').length)
// 		.to.equal(3)
// 	})
// })


describe('The section component', () => {
	const section = mount(<Section id='1' drawing='abc' buttonClick='()=>()' />)
	
	it('has a section element', () => {
		expect(section.find('section').length)
			.to.equal(1)
		})

	it('has a paragraph element', () => {
		expect(section.find('p').length)
			.to.equal(1)
	})
	it('paragraph has right text', () => {
		expect(section.find('p').text())
			.to.equal('Section 1')
	})
	it('has a canvas component', () => {
		expect(section.contains(<Canvas id='canvas-1' drawing='abc'/>))
			.to.equal(true)
	})

	it('has a button component', () => {
		expect(section.find('button').length)
			.to.equal(1)
	})
	it('has a cover component', () => {
		expect(section.contains(<Cover id='cover-1'/>))
			.to.equal(true)
	})

})



