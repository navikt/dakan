# Datakatalog 

## Arkitektur

### Frontend
Ulike typer innhold i katalogen, eksempelvis databasetabeller, datapakker, kafka topics, tableau workbooks vises i separate web applikasjoner (/packages/viewers). Motivasjonen for valg av mikrofronted arkitekturen er å gjøre det enkelt for team å legge til nye visninger for nye typer innhold i katalogen. 

### Backend
Innhold i datakatalogen er lagret en grafdatabase (CosmosDB Gremlin). Metadata er lagret i ElasticSearch 

## Designsystem
Felles frontend komponenter ligger i pakken @dakan/ui (/packages/shared/ui). 

### Theming
Theming er fullstendig definert i en json fil (/packages/shared/ui/theme/navTheme)  




