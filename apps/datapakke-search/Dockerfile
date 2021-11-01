FROM nginxinc/nginx-unprivileged:stable-alpine

USER root
RUN apk add --no-cache nodejs yarn && \
    yarn global add @beam-australia/react-env@3.0.8

ADD docker-entrypoint.sh /var/entrypoint.sh
RUN chmod +x /var/entrypoint.sh

RUN ln -s /tmp/__ENV.js /usr/share/nginx/html/__ENV.js
USER nginx

COPY build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.node.conf /etc/nginx/conf.d

ENTRYPOINT ["/var/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
