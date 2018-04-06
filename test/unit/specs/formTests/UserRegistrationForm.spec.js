import { shallow } from '@vue/test-utils'
import UserRegistrationForm from '@/components/forms/UserRegistrationForm'

describe('UserRegistrationForm', () => {
  it('renders a complete form ', () => {
    const wrapper = shallow(UserRegistrationForm, {
      data: {
        word: '',
        definition: [''],
        usage: [''],
        englishWords: ['']
      }
    })

    // see if the message renders
    expect(wrapper.find('.label.name').text()).toEqual('Name')
    expect(wrapper.find('.label.surname').text()).toEqual('Surname')
    expect(wrapper.find('.label.ttl').text()).toEqual('Title')
    expect(wrapper.find('.label.occupation').text()).toEqual('Occupation')
    expect(wrapper.find('.label.hometown').text()).toEqual('Hometown')
    expect(wrapper.find('.label.email').text()).toEqual('Email')
  })

  // Inspect the raw component options
  it('has a data hook', () => {
    expect(typeof UserRegistrationForm.data).toBe('function')
  })
})
