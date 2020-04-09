import { mount } from '@vue/test-utils'

import TodoApp from './TodoApp.vue'

test('renders a todo', () => {
  const wrapper = mount(TodoApp)

  const todo = wrapper.find('[data-test="todo"]')

  expect(todo.text()).toBe('Learn Vue.js 3')
})

test('creates a todo', async () => {
  const wrapper = mount(TodoApp)
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

  wrapper.find<HTMLInputElement>('[data-test="new-todo"]').element.value = 'New todo'
  await wrapper.find('[data-test="form"]').trigger('submit')

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
})

