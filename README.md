# Datakatalog 

[Ekstern datakatalog](https://data.nav.no)

[Intern datakatalog](https://data.adeo.no)

[Test/Preprod (kun tilgjengelig fra VDI) ](https://data.nais.preprod.local)

Slack: #data-catalog-intern

## Arkitektur

### Frontend
Ulike typer innhold i katalogen vises i separate web [applikasjoner](https://github.com/navikt/dakan/tree/master/packages/viewers). Motivasjonen for valg av mikrofronted arkitekturen er å gjøre det enkelt for team å legge til nye visninger for nye typer innhold i katalogen. 

Aktueller viewer applikasjoner:

* [Databasetabell](https://github.com/navikt/dakan/tree/master/packages/viewers/table)
* [Kafka topic](https://github.com/navikt/dakan/tree/master/packages/viewers/kafka)
* [Tableau workbook](https://github.com/navikt/dakan/tree/master/packages/viewers/tableau)
* [Begrep](https://github.com/navikt/dakan/tree/master/packages/viewers/term)
* [Person](https://github.com/navikt/dakan/tree/master/packages/viewers/person)
* [Team](https://github.com/navikt/dakan/tree/master/packages/viewers/team)
* [Produktområde](https://github.com/navikt/dakan/tree/master/packages/viewers/productarea)

### Backend 
Innhold i datakatalogen er lagret en grafdatabase (CosmosDB Gremlin). Metadata er lagret i ElasticSearch 

### API
All lesing og skriving til backend går via et API

## UI design

Slack: #datakalog-design

### Design Figma

* [Designelementer, verktøykasse](https://www.figma.com/proto/NPmUvNUbKhBJ2bKH88Tp1F/Datakatalogen)
* [Sider](https://www.figma.com/file/NPmUvNUbKhBJ2bKH88Tp1F/Datakatalogen?node-id=109%3A0)

### Frontendkomponenter

* [Demo (storybook)](https://navikt.github.io/dakan/story/themes-nav--samples)
* [Kildekode](https://github.com/navikt/dakan/tree/master/packages/shared/ui)


### Theming
Theming av frontend er definert i en [json fil](https://navikt.github.io/dakan/story/themes-nav--theme)  
