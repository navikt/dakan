import { navTheme, lightTheme, darkTheme, ThemeProvider } from '../theme'
import * as React from 'react'
import {
  Button,
  Checkbox,
  Input,
  Searchbox,
  Footer,
  Header,
  Navbar,
  Tab,
  Tabs,
  Tag,
} from '../components'
import {
  AddIcon,
  AddHoverIcon,
  AddActiveIcon,
  InfoIcon,
  InfoHoverIcon,
  InfoActiveIcon,
  ContactIcon,
  ContactHoverIcon,
  ContactActiveIcon,
  CloseIcon,
  CloseHoverIcon,
  CloseActiveIcon,
  DownloadIcon,
  DownloadHoverIcon,
  DownloadActiveIcon,
  FilterIcon,
  FilterHoverIcon,
  FilterActiveIcon,
  RightChevronIcon,
  RightChevronHoverIcon,
  RightChevronActiveIcon,
  MenuIcon,
  MenuHoverIcon,
  MenuActiveIcon,
  LeftChevronIcon,
  LeftChevronHoverIcon,
  LeftChevronActiveIcon,
  CameraIcon,
  CameraHoverIcon,
  CameraActiveIcon,
  DeleteIcon,
  DeleteHoverIcon,
  DeleteActiveIcon,
  UpChevronIcon,
  UpChevronHoverIcon,
  UpChevronActiveIcon,
  DownChevronIcon,
  DownChevronHoverIcon,
  DownChevronActiveIcon,
  EditIcon,
  EditHoverIcon,
  EditActiveIcon,
  SearchIcon,
  SearchHoverIcon,
  SearchActiveIcon,
} from '../components/icons'
import { Like_DislikeRating } from '../datacatalog/like-dislike/Like_DislikeRating'
import { Alert, ArrowLeft, ArrowRight } from 'baseui/icon'
import { SIZE, SHAPE, KIND, Button as BaseButton } from 'baseui/button'
import { Tagging, LoadingSpinner } from '../datacatalog'
import { Rating } from '../datacatalog/rating'
import { RadioGroup, Radio, ALIGN } from 'baseui/radio'
import { StyledLink } from 'baseui/link'
import { HeadingSmall, LabelLarge } from 'baseui/typography'
import { Block } from 'baseui/block'
import { Slider } from 'baseui/slider'
import { Select } from 'baseui/select'
import { ButtonGroup, StatefulButtonGroup, MODE } from 'baseui/button-group'
import { LABEL_PLACEMENT, STYLE_TYPE } from 'baseui/checkbox'
import { VARIANT, KIND as TAGKIND } from 'baseui/tag'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Table } from 'baseui/table-semantic'

export default {
  title: 'Themes/NAV',
  decorators: [withKnobs],
}

const getTheme = () => {
  const theme = text('Theme', 'NAV') || 'NAV'
  const borderRadius = text('Border Radius', '0px') || '0px'

  if (theme && theme === 'NAV') {
    return navTheme(borderRadius)
  }

  if (theme && theme === 'Dark') {
    return darkTheme(borderRadius)
  }

  return lightTheme(borderRadius)
}

const Spacer = (props) => (
  <Block marginTop="scale1600" marginBottom="scale500" backgroundColor="yellow">
    <HeadingSmall>{props.children}</HeadingSmall>
  </Block>
)

export const Like_Dislike_rating = () => {
  const theme = getTheme()
  return (
    <ThemeProvider theme={theme}>
      <Like_DislikeRating />
    </ThemeProvider>
  )
}

export const Star_Ratings = () => {
  const theme = getTheme()
  const [data, setData] = React.useState([
    {
      id: 1,
      label: 'table_rating',
      properties: {
        author: 'Lorem ipsum 1',
        rate: 1,
        date: '27.des.2014',
        time: '10:12',
      },
    },
    {
      id: 2,
      label: 'table_rating',
      properties: {
        author: 'Lorem ipsum 2',
        rate: 3,
        date: '17.sep.2013',
        time: '17:42',
      },
    },
    {
      id: 3,
      label: 'table_rating',
      properties: {
        author: 'Lorem ipsum 3',
        rate: 4,
        date: '17.sep.2012',
        time: '17:42',
      },
    },
  ])

  const clientUser = {
    userId: 'Lorem ipsum 1',
    givenName: 'Name',
    surname: 'Surname',
    initial: 'NS',
    email: 'test.test@test.test',
  }

  return (
    <ThemeProvider theme={theme}>
      <Rating
        ratings={data}
        setRatings={setData}
        clientUser={clientUser}
        dataId="test"
        nodeLabel="testRating"
      />
    </ThemeProvider>
  )
}

export const Icons = () => {
  const theme = getTheme()
  const data = [
    [<AddIcon />, <AddHoverIcon />, <AddActiveIcon />],
    [<CameraIcon />, <CameraHoverIcon />, <CameraActiveIcon />],
    [<CloseIcon />, <CloseHoverIcon />, <CloseActiveIcon />],
    [<ContactIcon />, <ContactHoverIcon />, <ContactActiveIcon />],
    [<DeleteIcon />, <DeleteHoverIcon />, <DeleteActiveIcon />],
    [<DownloadIcon />, <DownloadHoverIcon />, <DownloadActiveIcon />],
    [<FilterIcon />, <FilterHoverIcon />, <FilterActiveIcon />],
    [<InfoIcon />, <InfoHoverIcon />, <InfoActiveIcon />],
    [<MenuIcon />, <MenuHoverIcon />, <MenuActiveIcon />],
    [<LeftChevronIcon />, <LeftChevronHoverIcon />, <LeftChevronActiveIcon />],
    [
      <RightChevronIcon />,
      <RightChevronHoverIcon />,
      <RightChevronActiveIcon />,
    ],
    [<UpChevronIcon />, <UpChevronHoverIcon />, <UpChevronActiveIcon />],
    [<DownChevronIcon />, <DownChevronHoverIcon />, <DownChevronActiveIcon />],
    [<EditIcon />, <EditHoverIcon />, <EditActiveIcon />],
    [<SearchIcon />, <SearchHoverIcon />, <SearchActiveIcon />],
  ]
  return (
    <ThemeProvider theme={theme}>
      <Table columns={['', 'Hover', 'Active']} data={data} />
    </ThemeProvider>
  )
}

export const Spinners = () => {
  const theme = getTheme()
  return (
    <ThemeProvider theme={theme}>
      <LoadingSpinner size={98} />
    </ThemeProvider>
  )
}

export const Selects = () => {
  const [value, setValue] = React.useState([])
  return (
    <Select
      options={[
        { label: 'AliceBlue', id: '#F0F8FF' },
        { label: 'AntiqueWhite', id: '#FAEBD7' },
        { label: 'Aqua', id: '#00FFFF' },
        { label: 'Aquamarine', id: '#7FFFD4' },
        { label: 'Azure', id: '#F0FFFF' },
        { label: 'Beige', id: '#F5F5DC' },
      ]}
      value={value}
      placeholder="Select color"
      onChange={(params) => setValue(params.value)}
    />
  )
}

export const Samples = () => {
  const theme = getTheme()
  return (
    <ThemeProvider theme={theme}>
      <Spacer>{'Base Buttons'}</Spacer>
      <Block margin="scale800">
        <BaseButtons />
      </Block>
      <Spacer>{'Buttons'}</Spacer>
      <Block margin="scale800">
        <Buttons />
      </Block>
      <Spacer>{'IconButtons'}</Spacer>
      <Block margin="scale800">
        <IconButtons />
      </Block>
      <Spacer>{'Select'}</Spacer>
      <Block margin="scale800">
        <Select />
      </Block>
      <Spacer>{'Tags'}</Spacer>
      <Block margin="scale800">
        <Tags />
      </Block>
      <Spacer>{'Inputs'}</Spacer>
      <Block margin="scale800">
        <Inputs />
      </Block>
      <Spacer>{'Sliders'}</Spacer>
      <Block margin="scale800">
        <Sliders />
      </Block>
      <Spacer>{'Checkboxes'}</Spacer>
      <Block margin="scale800">
        <Checkboxes />
      </Block>
      <Spacer>{'Links'}</Spacer>
      <Block margin="scale800">
        <Links />
      </Block>
    </ThemeProvider>
  )
}

export const ButtonGroups = () => {
  const theme = getTheme()
  return (
    <ThemeProvider theme={theme}>
      <Block>
        <Spacer>{'Base default'}</Spacer>
        <ButtonGroup>
          <BaseButton>One</BaseButton>
          <BaseButton>Two</BaseButton>
          <BaseButton>Three</BaseButton>
        </ButtonGroup>
        <Spacer>{'Themed default'}</Spacer>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <Spacer>{'Themed minimal'}</Spacer>
        <ButtonGroup>
          <Button kind={KIND.minimal}>One</Button>
          <Button kind={KIND.minimal}>Two</Button>
          <Button kind={KIND.minimal}>Three</Button>
        </ButtonGroup>

        <Spacer>{'Statefull Base default'}</Spacer>
        <StatefulButtonGroup mode={MODE.radio} initialState={{ selected: 0 }}>
          <BaseButton>One</BaseButton>
          <BaseButton>Two</BaseButton>
          <BaseButton>Three</BaseButton>
        </StatefulButtonGroup>
        <Spacer>{'Statefull Themed default'}</Spacer>
        <StatefulButtonGroup mode={MODE.radio} initialState={{ selected: 0 }}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </StatefulButtonGroup>
        <Spacer>{'Statefull Themed minimal'}</Spacer>
        <StatefulButtonGroup mode={MODE.radio} initialState={{ selected: 0 }}>
          <Button kind={KIND.minimal}>One</Button>
          <Button kind={KIND.minimal}>Two</Button>
          <Button kind={KIND.minimal}>Three</Button>
        </StatefulButtonGroup>
      </Block>
    </ThemeProvider>
  )
}

export const Navbars = () => {
  const theme = getTheme()
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  )
}

export const Data_Tagging = () => {
  const tagOptions = [
    {
      id: 'tag1',
      label: 'tag1',
      properties: { name: 'tag1', type: 'tag1type' },
    },
    {
      id: 'tag2',
      label: 'tag2',
      properties: { name: 'tag2', type: 'tag2type' },
    },
  ]
  const dataId = 123
  const [columnTags, setColumnTags] = React.useState([
    { id: 'tag3', label: 'tag3', properties: { name: 'tag3', type: 'tag3' } },
    { id: 'tag4', label: 'tag4', properties: { name: 'tag4', type: 'tag4' } },
    {
      id: 'tag5',
      label: 'tag5',
      properties: { name: 'test@test.test', type: 'tag5' },
    },
    {
      id: 'tag6',
      label: 'tag6',
      properties: { name: 'tag test', type: 'tag6' },
    },
  ])
  const theme = getTheme()
  return (
    <ThemeProvider theme={theme}>
      <Tagging
        dataId={dataId}
        tagOptions={tagOptions}
        serverUrl="testUrl"
        dataTags={columnTags}
        setDataTags={setColumnTags}
        edgeLabel="hasTag"
        tagLabel="name"
      />
    </ThemeProvider>
  )
}

export const Tabbar = () => {
  const [activeKey, setActiveKey] = React.useState('0')
  const theme = getTheme()

  const getTitle = (title, key, activeKey) => {
    return (
      <LabelLarge color={key === activeKey ? 'black' : theme.colors.primary}>
        {key === activeKey ? <b>{title}</b> : <u>{title}</u>}
      </LabelLarge>
    )
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Tabs
          onChange={({ activeKey }) => {
            setActiveKey(activeKey.toString())
          }}
          activeKey={activeKey}
        >
          <Tab title={getTitle('First tab', '0', activeKey)}>
            First tab content
          </Tab>
          <Tab title={getTitle('Second tab', '1', activeKey)}>
            Second tab content
          </Tab>
        </Tabs>
      </ThemeProvider>
    </div>
  )
}

export const Headers = () => {
  const theme = getTheme()
  return (
    <ThemeProvider theme={theme}>
      <Block marginTop="scale1000">
        <Block marginBottom="scale500">
          <Spacer>Header with login button:</Spacer>
        </Block>
        <Header
          //showBackButton
          config={{
            brand: 'Datakatalogen',
            about: true,
            contact: true,
            showLoginButton: true,
            link: 'https://data.nav.no/',
            aboutLink: 'https://data.nav.no/',
          }}
        />
      </Block>
      <Block marginTop="200px">
        <Block marginBottom="scale500">
          <Spacer>Header with user logged in:</Spacer>
        </Block>
        <Header
          //showBackButton
          showLoginButton
          config={{
            brand: 'Datakatalogen',
            about: true,
            contact: true,
            showLoginButton: true,
            tokenId: 'Test',
            clientUser: {
              userId: 'TEST1245',
              initial: 'TS',
            },
          }}
        />
      </Block>
    </ThemeProvider>
  )
}

export const Footers = () => {
  const theme = getTheme()
  return (
    <ThemeProvider theme={theme}>
      <Block>
        <Block marginBottom="scale500">
          <Spacer>External Footer:</Spacer>
        </Block>
        <Footer />
      </Block>
      <Block marginTop="scale1000">
        <Block marginBottom="scale500">
          <Spacer>Internal Footer:</Spacer>
        </Block>
        <Footer isInternal />
      </Block>
    </ThemeProvider>
  )
}

const Inputs = () => {
  const [value, setValue] = React.useState('Hello')
  return (
    <Block>
      <Block marginBottom="scale800">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Controlled Input"
        />
      </Block>
      <br />
      <Block marginBottom="scale800">
        <Searchbox
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Controlled Input"
        />
      </Block>
    </Block>
  )
}

const BaseButtons = () => {
  return (
    <Block display="flex" justifyContent="space-between">
      <BaseButton kind={KIND.primary}>primary</BaseButton>
      <BaseButton kind={KIND.primary} size={SIZE.compact}>
        compact
      </BaseButton>
      <BaseButton kind={KIND.primary} size={SIZE.mini}>
        mini
      </BaseButton>
      <BaseButton kind={KIND.primary} shape={SHAPE.pill}>
        pill
      </BaseButton>
      <BaseButton kind={KIND.minimal}>minimal</BaseButton>
      <BaseButton kind={KIND.tertiary}>tertiary</BaseButton>
      <BaseButton kind={KIND.secondary}>secondary</BaseButton>
    </Block>
  )
}

const Buttons = () => {
  return (
    <Block display="flex" justifyContent="space-between">
      <Button kind={KIND.primary}>primary</Button>
      <Button kind={KIND.primary} size={SIZE.compact}>
        compact
      </Button>
      <Button kind={KIND.primary} size={SIZE.mini}>
        mini
      </Button>
      <Button kind={KIND.primary} shape={SHAPE.pill}>
        pill
      </Button>
      <Button kind={KIND.minimal}>minimal</Button>
      <Button kind={KIND.tertiary}>tertiary</Button>
      <Button kind={KIND.secondary}>secondary</Button>
    </Block>
  )
}

const IconButtons = () => {
  return (
    <Block display="flex" justifyContent="space-between">
      <Button
        kind={KIND.primary}
        startEnhancer={<ArrowRight size={24} />}
        startEnhancerHover={<ArrowRight size={24} />}
      >
        primary
      </Button>
      <Button
        size={SIZE.compact}
        kind={KIND.primary}
        startEnhancer={<ArrowRight />}
        startEnhancerHover={<ArrowLeft />}
      >
        primary
      </Button>
      <Button
        kind={KIND.primary}
        startEnhancer={<Alert size={24} />}
        startEnhancerHover={<ArrowRight size={24} />}
      >
        primary
      </Button>
      <Button
        kind={KIND.primary}
        style={{ borderRadius: 'px' }}
        startEnhancer={<Alert size={24} />}
        startEnhancerHover={<ArrowRight size={24} />}
      >
        radius
      </Button>
      <Button
        kind={KIND.primary}
        shape={SHAPE.pill}
        startEnhancer={<Alert size={24} />}
        startEnhancerHover={<ArrowRight size={24} />}
      >
        primary
      </Button>
      <Button
        kind={KIND.minimal}
        startEnhancer={<InfoIcon size={24} />}
        startEnhancerHover={<Alert size={24} />}
      >
        minimal
      </Button>
      <Button kind={KIND.tertiary} startEnhancer={<InfoIcon size={24} />}>
        tertiary
      </Button>
      <Button
        kind={KIND.secondary}
        startEnhancer={<InfoIcon size={24} />}
        startEnhancerHover={<Alert size={24} />}
      >
        secondary
      </Button>
    </Block>
  )
}
const Links = () => {
  return (
    <React.Fragment>
      <LabelLarge>
        <StyledLink href="https://data.nav.no">Large link</StyledLink>
      </LabelLarge>
      <br />
      <StyledLink href="https://www.google.com">Link</StyledLink>
    </React.Fragment>
  )
}

const Tags = () => {
  const theme = getTheme()
  const variants = Object.keys(VARIANT)
  return (
    <React.Fragment>
      {variants.map((variant, index) => (
        <React.Fragment key={index}>
          <Tag closeable={false} variant={variant} kind="neutral">
            neutral
          </Tag>
          <Tag closeable={false} variant={variant} kind="primary">
            primary
          </Tag>
          <Tag closeable={false} variant={variant} kind="accent">
            accent
          </Tag>
          <Tag closeable={false} variant={variant} kind="positive">
            positive
          </Tag>
          <Tag closeable={false} variant={variant} kind="warning">
            warning
          </Tag>
          <Tag closeable={false} variant={variant} kind="negative">
            negative
          </Tag>
          <br />
        </React.Fragment>
      ))}
      <React.Fragment>
        <Tag
          color="#4327F1"
          variant={VARIANT.solid}
          kind={TAGKIND.custom}
          onClick={() => {}}
        >
          custom
        </Tag>
        <br />
        <Tag color="#4327F1" kind={TAGKIND.custom} onClick={() => {}}>
          custom
        </Tag>
        <br />
        <Tag
          color="#4327F1"
          variant={VARIANT.outlined}
          kind={TAGKIND.custom}
          onClick={() => {}}
        >
          custom
        </Tag>
        <br />
        <Tag
          color="black"
          kind={TAGKIND.custom}
          closeable={false}
          backgroundColor={'yellow'}
        >
          custom
        </Tag>
        <Tag
          color="black"
          kind={TAGKIND.custom}
          closeable={false}
          backgroundColor={'yellow'}
          borderColor={theme.colors.tagApiBorderColor}
        >
          custom with outline
        </Tag>
      </React.Fragment>
    </React.Fragment>
  )
}

const Sliders = () => {
  const [value, setValue] = React.useState([10])
  return (
    <Slider value={value} onChange={({ value }) => value && setValue(value)} />
  )
}

const Radios = () => {
  const [value, setValue] = React.useState('2')
  return (
    <RadioGroup
      value={value}
      onChange={(e) => setValue(e.target.value)}
      name="number"
      align={ALIGN.vertical}
    >
      <Radio value="1">One</Radio>
      <Radio value="2" description="This is a radio description">
        Two
      </Radio>
      <Radio value="3">Three</Radio>
    </RadioGroup>
  )
}

const Checkboxes = () => {
  const [checked, setChecked] = React.useState(false)
  const [checkboxes, setCheckboxes] = React.useState([false, false])
  return (
    <React.Fragment>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
      >
        Sign up for the newsletter
      </Checkbox>
      <br />
      <Checkbox
        checked={checkboxes[0]}
        onChange={(e) => {
          const nextCheckboxes = [...checkboxes]
          nextCheckboxes[0] = e.currentTarget.checked
          setCheckboxes(nextCheckboxes)
        }}
        checkmarkType={STYLE_TYPE.toggle_round}
      >
        toggle me
      </Checkbox>
      <br />
      <Checkbox
        disabled
        checked={checkboxes[1]}
        onChange={(e) => {
          const nextCheckboxes = [...checkboxes]
          nextCheckboxes[1] = e.currentTarget.checked
          setCheckboxes(nextCheckboxes)
        }}
        checkmarkType={STYLE_TYPE.toggle_round}
      >
        disabled toggle
      </Checkbox>
    </React.Fragment>
  )
}

export const Theme = () => {
  const theme = getTheme()
  return <pre>{JSON.stringify(theme, null, 2)}</pre>
}
