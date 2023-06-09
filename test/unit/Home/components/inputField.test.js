import { html } from 'lit'
import { fixture, expect, oneEvent } from '@open-wc/testing'
import '../../../../src/Home/components/inputFieldComponent.js'

describe('InputFieldComponent', () => {
  let element

  const label = 'felipe New'

  const buildElem = () =>
    fixture(
      html`<input-field-component
        iconSrc="icon"
        .label=${label}
      ></input-field-component>`
    )

  beforeEach(async () => {
    element = await buildElem()
  })

  it('should renders a field-input', () => {
    const inputFieldComponentEl =
      element.shadowRoot.querySelector('#input-field')
    expect(inputFieldComponentEl).to.exist
  })

  it('should renders a label and shows text', () => {
    const labelEl = element.shadowRoot.querySelector('label')
    expect(labelEl).to.exist
    expect(labelEl.textContent).to.contain(label)
  })

  it('should renders input', () => {
    const inputEl = element.shadowRoot.querySelector('input')
    expect(inputEl).to.exist
  })

  it('should return empty class for label the first time', async () => {
    const labelClass = element._getLabelCalss()
    expect(labelClass).to.equal('')
  })

  it('should return empty label-up label if value is fill', async () => {
    element = await buildElem()
    element.value = 'lol'
    const labelClass = element._getLabelCalss()
    expect(labelClass).to.equal('label-up')
  })

  it('should return empty label-up label if value is fill', async () => {
    element = await buildElem()

    const value = 'pepe'
    const listener = oneEvent(element, 'update-value')

    element._setValue(value)

    const { detail } = await listener

    expect(detail.value).to.equal(value)
  })
})
