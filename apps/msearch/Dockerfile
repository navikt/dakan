FROM nginx:1.16.0-alpine

# needed to run env variables setup
RUN apk add --no-cache nodejs yarn
# add env variable setup script
RUN yarn global add @beam-australia/react-env@2.1.2
ADD docker-entrypoint.sh /var/entrypoint.sh
RUN chmod +x /var/entrypoint.sh

COPY build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.node.conf /etc/nginx/conf.d

ENTRYPOINT ["/var/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]