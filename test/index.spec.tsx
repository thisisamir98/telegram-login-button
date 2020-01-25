import { mount, ReactWrapper } from 'enzyme'
import * as React from 'react'
import C from '../src'

describe('Component', () => {
  let container: HTMLDivElement
  let wrapper: ReactWrapper

  beforeEach(() => {
    container = document.body.appendChild(document.createElement('div'))
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  it('should render correctly', () => {
    wrapper = mount(<C botName="test" dataOnauth={() => undefined} />, {
      attachTo: container
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
