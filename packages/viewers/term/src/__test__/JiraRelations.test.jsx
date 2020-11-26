import React from 'react'
import { shallow } from '../enzyme'
import exampleJson from '../resources/example.json'
import JiraRelations from '../components/JiraRelations'
import { StyledLink as Link } from 'baseui/link'

describe('Test for JiraRelations component', () => {
  let wrapper
  let wrapperEmptyRelation
  let testContent

  beforeAll(() => {
    testContent = exampleJson._source.content.relasjoner
    wrapperEmptyRelation = shallow(<JiraRelations relations={[]} />)
    wrapper = shallow(<JiraRelations relations={testContent} />)
  })

  it('Test return if no relations found', () => {
    const expected = 'Ingen relasjoner funnet.'
    expect(wrapperEmptyRelation.text()).toEqual(expected)
  })

  it('Test return if relations found', () => {
    expect(wrapper.find(Link).length).toEqual(2)
    expect(wrapper.contains('er homograf til')).toEqual(true)
  })
})
