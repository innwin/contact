FROM ubuntu
RUN add-apt-repository -y  ppa:webupd8team/java && \
apt-get -y update && \
apt-get -y install oracle-java8-installer

ENV dir /var/contact

COPY src ${dir}/src
COPY pom.xml mvnw ${dir}/
COPY .mvn ${dir}/.mvn
COPY phantomjs /usr/bin/

WORKDIR ${dir}

CMD ./mvnw jetty:run
