# Dakan. NAV data catalog

The motivation behind Dakan is to

* Enable dataproduct and datamesh thinking in NAV
* Provide infrastructure for a shared metadata graph in NAV
* Allow presenting rich dataproducts directly in the catalog UI

## URLs/addresses

Public: https://data.nav.no

Internal: https://data.adeo.no or https://data.intern.nav.no

Test: https://data.dev-fss.nais.io/ or https://data.dev.intern.nav.no

## Frontend/viewers

The frontend app consists of a search page backed by elastic search and a number of independent 'viewer' apps
Each type of content in the catalog is associated with a dedicated viewer app.

The motivation for the microfrontend architecture is to lower the barrier for independent teams to develop and maintain custom viewers for their content types.

## Backend 

* Metadata relevant for search is stored in dcat format in [Elastic search](https://github.com/navikt/dataverk-api).
* More comprehensive metadata is stored in a [graph database](https://github.com/navikt/data-catalog-api) (CosmosDB Gremlin).
* Data is stored in buckets, either S3 on prem (internal data) or Google Cloud Storage (public data).

## APIs

* dakan-api-skriv - Api for registering data products, datapakker etc.
    * updates a search index (ElasticSearch) to make resources searchable in the data catalog
    * for data types that include files (eg. for datapakker) the api uploads the files to GSP bucket storage.
    * uses dakan-api-graph for updating graph database (CosmosDB)

* dakan-api-les - Read-only api to retrieve content to be displayed in Data catalog frontend [Dakan](https://github.com/navikt/dakan)
    * used only by [Dakan](https://github.com/navikt/dakan)
    * read from elasticsearch and GCP bucket storage and content is to be displayed in the various viewers in Dakan
    * a separate read-only api because this is exposed to the internet for external data catalog at https://data.nav.no/api.

* dakan-api-graph - Api for writing to / reading from CosmosDB
    * Used by [Dakan](https://github.com/navikt/dakan), but also by other jobs / apps that write either periodic or continuous nodes to the graph database. Ex: the notebooks, kafka consumers and dakan-api-skriv

### Integrations

[Felles datakatalog](https://data.norge.no/) harvests data from Dakan trough an [API](https://github.com/navikt/digdir-api.
The API converts dcat-ap metadata in JSON format from Elastic Search to RDF format.
The API is based on two utility libraries developed by [Digitaliseringsdirektoratet](https://github.com/Informasjonsforvaltning):
* [concepttordf](https://github.com/Informasjonsforvaltning/concepttordf) to map concept collections to the skos-ap-no specification.
* [datacatalogtordf](https://github.com/Informasjonsforvaltning/datacatalogtordf) to map the collection to RDF.

![Architecture](./docs/svg/fdk.svg)

[Open API/Swagger](https://data.nav.no/digdir-api/docs)

[Source (github)](https://github.com/navikt/digdir-api)

## Development

You need a NPM token (called `PACKAGE_TOKEN`) to download the dependencies needed to build the viewers.

Add the `PACKAGE_TOKEN` to the .npmrc file located in the root folder.

To run separate applications locally use these commands:

```
yarn install
yarn run setup
yarn shared:build
```

To run msearch locally you need create a .env.local file with these values:
```
REACT_APP_ELASTIC_ENDPOINT=https://data.nav.no/api
REACT_APP_ELASTIC_INDEX=dcat
REACT_APP_TITLE=Åpne data
REACT_APP_CONFIG={"facets":[{"field":"format","label":"Type"},{"field":"theme","label":"Tema"}],"panels":[{"field":"keyword","label":"Stikkord"},{"field":"creator.name","label":"Forfatter"},{"field":"provenance","label":"Opprinnelse"},{"field":"content.status","label":"Begrep Status"}]}
REACT_APP_MARKDOWN_OPEN_DATA_URL=https://raw.githubusercontent.com/navikt/data-catalog-markdown/master/about-open-data.md
REACT_APP_MARKDOWN_TERM_URL=https://raw.githubusercontent.com/navikt/data-catalog-markdown/master/about-term-catalog.md
REACT_APP_GTM_ID=GTM-T8PMK84
REACT_APP_AMPLITUDE_PROJECT_ID=default
REACT_APP_AMPLITUDE_ENDPOINT=/collect-auto
```

Scripts are located in the package.json in the root folder.

### Building the application

`PUBLIC_URL` is used to specify the base URL when building the viewer.

Remember to build the shared dependencies before building a viewer (only needed to be done once).
```
yarn shared:build
```

Building a viewer can be done from root with `yarn name-of-viewer:build` or directly in the viewer with `yarn build`.

Testing is done same as build, just use `test` instead (`yarn test`).

### Contact

Slack: [#dig-dakan](https://nav-it.slack.com/archives/CQ9SV9DNE)

## UI & design

### Design elements on Figma

* [Designelementer, verktøykasse](https://www.figma.com/proto/NPmUvNUbKhBJ2bKH88Tp1F/Datakatalogen)
* [UI](https://www.figma.com/file/NPmUvNUbKhBJ2bKH88Tp1F/Datakatalogen?node-id=109%3A0)

### Shared UI components 

* [Source (github)](https://github.com/navikt/dakan/tree/master/packages/shared/ui)

### Contact

Slack: #datakalog-design




