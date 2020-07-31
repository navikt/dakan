# Datakatalog 

Datakatalogen er bygget opp som samling mikrofrontends. Ulike typer innhold i katalogen, eksempelvis databasetabeller, datapakker, kafka topics, tableau workbooks vises i separate web applikasjoner (/packages/viewers). Mikrofronted fremgangsmåten er valgt for å gjøre det enkelt for team å legge til nye visninger for nye typer innhold i katalogen. 

Felles frontend komponenter ligger i pakken @dakan/ui (/packages/shared/ui). Theming er definert i en json fil (/packages/shared/ui/theme/navTheme)  