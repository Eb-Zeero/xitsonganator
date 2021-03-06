import { shallow } from '@vue/test-utils'
import ReportWordForm from '@/components/forms/ReportWordForm'

describe('ReportWordForm', () => {
  it('renders a complete form ', () => {
    const wrapper = shallow(ReportWordForm, {
      data: {
        word: '',
        definition: [''],
        usage: [''],
        englishWords: ['']
      }
    })

    // see if the message renders
    expect(wrapper.find('.label.word').text()).toEqual('Word')
    expect(wrapper.find('.label.definition').text()).toEqual('Definition')
    expect(wrapper.find('.label.usage').text()).toEqual('Usage')
    expect(wrapper.find('.label.english').text()).toEqual('English translation')
  })

  // Inspect the raw component options
  it('has a data hook', () => {
    expect(typeof ReportWordForm.data).toBe('function')
  })
})
