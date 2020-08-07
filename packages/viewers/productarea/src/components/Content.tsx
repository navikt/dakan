/* eslint-disable react/jsx-pascal-case */
import * as React from 'react'
import { Block } from 'baseui/block'
import { LabelMedium } from 'baseui/typography'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { LayoutSplit as Layout } from '@dakan/ui'
import { StyledLink as Link } from 'baseui/link'
import env from '@beam-australia/react-env'

const teamViewerUrl = env('TEAM_VIEWER_URL') || '../team'
const personViewerUrl = env('TEAM_VIEWER_URL') || '../person'

const getPeople = (item) => {

  const columnsPerson: any[] = [
    <TableBuilderColumn key="col_person_name" id="name" header="Navn">
      {(row) => (
        <Link key={`link_${row.data.id}`} href={`${personViewerUrl}/${row.id}`}>
          {row.data.name}
        </Link>
      )}
    </TableBuilderColumn>,
    <TableBuilderColumn key="col_person_id" id="id" header="Ident">
      {(row) => row.data.id}
    </TableBuilderColumn>,
    <TableBuilderColumn key="col_person_roles" id="roles" header="Rolle">
      {(row) => row.data.roles}
    </TableBuilderColumn>,
    <TableBuilderColumn key="col_person_type" id="type" header="Ansatt">
      {(row) => row.data.type}
    </TableBuilderColumn>,
  ]


  let rows: any = []
  item['members_area'].map((member) => {
    const row: any = {}
    row['id'] = member['navIdent']
    const data: any = {
      id: member['navIdent'],
      name: member['resource']['fullName'],
      roles: member['roles'],
      type: member['resource']['resourceType'],
    }
    row['data'] = data
    rows.push(row)
  })

  return <TableBuilder data={rows}>{columnsPerson}</TableBuilder>
}

const getTeams = (item) => {

  const columnsTeam: any[] = [
    <TableBuilderColumn key="col_team_name" id="name" header="Navn">
      {(row) => <Link href={`${teamViewerUrl}/${row.id}`}>{row.data.name}</Link>}
    </TableBuilderColumn>,
    <TableBuilderColumn
      key="col_team_description"
      id="description"
      header="Beskrivelse"
    >
      {(row) => row.data.description}
    </TableBuilderColumn>,
  ]

  let rows: any = []
  item['teams'].map((team) => {
    const row: any = {}
    row['id'] = team['id_team']
    const data: any = {
      id: team['id_team'],
      name: team['name_team'],
      description: team['description_team'],
    }
    row['data'] = data
    rows.push(row)
  })

  return <TableBuilder data={rows}>{columnsTeam}</TableBuilder>
}

const Content = ({ item }) => {

  const Head = () => <Block>{item['description_area']}</Block>

  const Tables = () => {
    if (item) {
      return (
        <Block width="100%" marginBottom='scale1200'>
          <Block>
            <LabelMedium>Ansatte</LabelMedium>
            {getPeople(item)}
          </Block>
          <Block marginTop="scale1200">
            <LabelMedium>Team</LabelMedium>
            {getTeams(item)}
          </Block>
        </Block>
      )
    }
    return null
  }

  return (
    <React.Fragment>
      <Block>
        <Layout
          headingLabel="Produktområde"
          headingText={item && item['name_area']}
          left={<Head />}
          right={<Tables />}
        ></Layout>
      </Block>
    </React.Fragment>
  )
}
export default Content
