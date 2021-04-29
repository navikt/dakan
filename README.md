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

Metadata relevant for search is stored in dcat format in [Elastic search](https://github.com/navikt/dataverk-api).
More comprehensive metadata is stored in a [graph database](https://github.com/navikt/data-catalog-api) (CosmosDB Gremlin).
Data is stored in buckets, either S3 on prem (internal data) or Google Cloud Storage (public data).

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

`PUBLIC_URL` is used to specify the base URL when building the viewer.

Remeber to build the shared dependencies before building a viewer (only needed to be done once).
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




