FROM postgres:10.9-alpine
LABEL maintainer="cevgutierrez22@gmail.com"
ENV POSTGRES_PASSWORD=123
ENV POSTGRES_DB=mediappbd2
ENV POSTGRES_USER=postgres
EXPOSE 5432
COPY ./scripts/ /docker-entrypoint-initdb.d/
CMD ["postgres"]
#insert into public.comida values (1,pg_read_binary_file('gaseosa.jpeg'),'nombre',5);
# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time.
#ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar cineapp-backend.jar