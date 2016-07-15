import crop					from '../../lib/image-functions.js'
import {canvasData} from '../helpers/canvas-data.js'
import {
	expect, 
	assert} 					from 'chai'

describe('The Crop function', () => {
	const newCanvasData = crop(canvasData)

	it('returns canvas data', () => {
		expect(newCanvasData).to.contain('data:image/png;base64,')
		expect(newCanvasData).to.not.equal('data:,')
		assert(newCanvasData.length < canvasData.length)
		expect.typeOf(newCanvasData).to.equal('string')
		console.log(newCanvasData.length, canvasData.length)
	})
})