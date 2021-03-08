# production environment
FROM nginx:1.16.0-alpine

ARG PUBLIC_URL=/
ENV PUBLIC_URL ${PUBLIC_URL}

# needed to run env variables setup
RUN apk add --no-cache nodejs yarn
# add env variable setup script
RUN yarn global add @beam-australia/react-env@3.0.8
# setup env variables js file
ADD entrypoint.sh /var/entrypoint.sh

COPY build /usr/share/nginx/html${PUBLIC_URL}
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80

ENTRYPOINT ["/var/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]