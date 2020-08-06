/* eslint-disable react/jsx-pascal-case */
import * as React from 'react'
import { Block } from 'baseui/block'
import { LabelMedium } from 'baseui/typography'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { LayoutSplit as Layout } from '@dakan/ui'
import { StyledLink as Link } from 'baseui/link'
import env from '@beam-australia/react-env'

const teamViewerUrl = env('TEAM_VIEWER_URL') || '../team'

const teamViewerLink = (row) => {
  return `${teamViewerUrl}/${row.id}`
}

const Content = ({ item }) => {
  const columnsPerson: any[] = [
    <TableBuilderColumn key="col_person_name" id="name" header="Navn">
      {(row) => (
        <Link key={`link_${row.data.id}`} href={teamViewerLink(row)}>
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

  const columnsTeam: any[] = [
    <TableBuilderColumn key="col_team_name" id="name" header="Navn">
      {(row) => <Link href={teamViewerLink(row)}>{row.data.name}</Link>}
    </TableBuilderColumn>,
    <TableBuilderColumn
      key="col_team_description"
      id="description"
      header="Beskrivelse"
    >
      {(row) => row.data.description}
    </TableBuilderColumn>,
  ]

  const getPeople = () => {
    let rows: any = []
    item['members_productarea'].map((member) => {
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

  const getTeams = () => {
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

  const Head = () => <Block>{item['description_productarea']}</Block>

  const Tables = () => {
    if (item) {
      return (
        <Block width="100%">
          <Block>
            <LabelMedium>Ansatte</LabelMedium>
            {getPeople()}
          </Block>
          <Block marginTop="scale1200">
            <LabelMedium>Team</LabelMedium>
            {getTeams()}
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
          headingText={item['name_productarea']}
          left={<Head />}
          right={<Tables />}
        ></Layout>
      </Block>
    </React.Fragment>
  )
}
export default Content
