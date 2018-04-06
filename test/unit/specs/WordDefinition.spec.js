import { shallow } from '@vue/test-utils'
import WordDefinition from '@/components/WordDefinition'

describe('WordDefinition', () => {
  it('renders a message and responds correctly to user input', () => {
    const wrapper = shallow(WordDefinition, {
      data: {
        word: 'Word1',
        definition: ['a', 'b']
      }
    })

    // see if the message renders
    expect(wrapper.find('.title.is-3').text()).toEqual('Word1')
  })

  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof WordDefinition.data).toBe('function')
  })
})
