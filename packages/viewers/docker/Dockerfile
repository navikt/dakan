FROM docker.pkg.github.com/navikt/dakan/common


ARG PUBLIC_URL=/
ENV PUBLIC_URL ${PUBLIC_URL}

ARG VIEWER="dummy"
ENV NGINX_VIEWER ${VIEWER}

COPY build /usr/share/nginx/html${PUBLIC_URL}
