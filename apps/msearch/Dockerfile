FROM nginxinc/nginx-unprivileged:stable-alpine

RUN apk add --no-cache nodejs yarn && \
        yarn global add @beam-australia/react-env@3.0.8
ADD docker-entrypoint.sh /var/entrypoint.sh
RUN chmod +x /var/entrypoint.sh

COPY build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

RUN ln -s /tmp/__ENV.js /usr/share/nginx/html/__ENV.js

ENTRYPOINT ["/var/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
