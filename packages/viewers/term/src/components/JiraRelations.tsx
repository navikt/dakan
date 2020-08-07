import * as React from 'react'
import { StyledLink as Link } from 'baseui/link'

const JiraRelations = (props: any) => {
  const { relations } = props
  const legnthRel = relations.length
  if (legnthRel === 0) return <div>Ingen relasjoner funnet.</div>
  else {
    return (
      <React.Fragment>
        {relations.map((rel: any) => (
          <React.Fragment key={rel.id}>
            {rel.hasOwnProperty('inwardIssue')
              ? rel.type.inward
              : rel.type.outward}{' '}
            <Link
              href={
                rel.hasOwnProperty('inwardIssue')
                  ? `./${rel.inwardIssue.key}`
                  : `./${rel.outwardIssue.key}`
              }
            >
              {rel.hasOwnProperty('inwardIssue')
                ? rel.inwardIssue.fields.summary
                : rel.outwardIssue.fields.summary}
            </Link>{' '}
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  }
}
export default JiraRelations
