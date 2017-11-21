import { mount } from 'vue-test-utils'
import Component from '../../src/components/HelloWorld'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.find('h1').text()).toBe('this is test')
  })
})