import { shallow } from '@vue/test-utils'
import HomeInfo from '@/components/HomeInfo'

describe('HomeInfo', () => {
  it('renders a message and responds correctly to user input', () => {
    const wrapper = shallow(HomeInfo, {
      data: {
        word: 'this is some massage'
      }
    })

    // see if the message renders
    expect(wrapper.find('.title.is-2').text()).toEqual('Xitsonga')
  })

  // Inspect the raw component options
  it('has a data hook', () => {
    expect(typeof HomeInfo.data).toBe('function')
  })
})
