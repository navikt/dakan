import React from 'react'
import { Block } from 'baseui/block'
import { Spinner } from 'baseui/spinner'
import { Card } from 'baseui/card'
import { StyledLink } from 'baseui/link'
import { HeadingSmall, LabelXSmall } from 'baseui/typography'
import { formatWithOptions } from 'date-fns/fp'
import { nb } from 'date-fns/locale'

import getViewerProps from '../components/views/view-helpers/getViewerProps'
import useDatapackages from '../hooks/useDatapackages'

const disclaimer = (props) => {
  return (
    <>
      <HeadingSmall>
        Åpne data fra NAV er en beta versjon av en ny tjeneste under utvikling.{' '}
        <StyledLink href="./about">
          Send oss gjerne innspill til forbedringer eller forslag til nye
          datasett.
        </StyledLink>
      </HeadingSmall>
    </>
  )
}

const dateToString = formatWithOptions({ locale: nb }, 'd MMMM yyyy')

const getDetails = (result) => {
  return (
    <>
      <Block>{result.description}</Block>
      <Block marginTop="scale800">
        <LabelXSmall>Type: Datapakke</LabelXSmall>
        <LabelXSmall>
          Oppdatert {dateToString(new Date(result.modified))}
        </LabelXSmall>
      </Block>
    </>
  )
}

export const ListPage = (props, state) => {
  const [data, loading] = useDatapackages()

  const flexLayout = () => {
    return (
      <>
        <Block margin="scale1000">
          {disclaimer()}
          <Block
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
            justifyItems="center"
            gridGap="scale1000"
          >
            {main()}
          </Block>
        </Block>
      </>
    )
  }

  const main = () => {
    const items =
      data &&
      data.hits &&
      data.hits.map((hit, index) => {
        const result = hit._source
        const url = getViewerProps(result.format).link
        const link = `${url}/${result.id}`
        return (
          <Card
            key={`car_hit_${index}`}
            //headerImage={result.image ? result.image : 'https://source.unsplash.com/user/erondu/320x180'}
            title={<StyledLink href={link}>{result.title}</StyledLink>}
            overrides={{
              Root: {
                style: {
                  minWidth: '320px',
                  maxWidth: '320px',
                  justifySelf: 'center',
                },
              },
            }}
          >
            {getDetails(result)}
          </Card>
        )
      })

    return (
      <>
        {loading && <Spinner />}
        {items}
      </>
    )
  }

  return <>{flexLayout()}</>
}

export default ListPage
