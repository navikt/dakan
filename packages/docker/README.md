# Docker for Dakan

Vi har et felles Nginx-image, og en felles Dockerfile.

## Felles Nginx-image

Ved å bruke templating holder det med et felles Nginx-image for vieweren.

Bygges på:
```
docker build -t ghcr.io/navikt/dakan/common:X -f Dockerfile.nginx .
docker push ghcr.io/navikt/dakan/common:X
```
