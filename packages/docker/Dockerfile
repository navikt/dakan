FROM ghcr.io/navikt/dakan/common:1
LABEL org.opencontainers.image.source https://github.com/navikt/dakan

ARG NGINX_VIEWER="dummy"
ENV NGINX_VIEWER $NGINX_VIEWER

COPY build "/usr/share/nginx/html/$NGINX_VIEWER"
