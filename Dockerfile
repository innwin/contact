FROM ubuntu

RUN apt-get update && apt-get -y install wget && wget --no-cookies --no-check-certificate --header \
"Cookie: gpw_e24=http://www.oracle.com/; oraclelicense=accept-securebackup-cookie" \
"http://download.oracle.com/otn-pub/java/jdk/8u141-b15/336fa29ff2bb4ef291e347e091f7f4a7/jdk-8u141-linux-x64.tar.gz" 


COPY phantomjs /usr/bin/


RUN tar -zxf jdk-8u141-linux-x64.tar.gz -C /usr/local/ && \
rm -rf jdk-8u141-linux-x64.tar.gz && \
chmod +x /usr/bin/phantomjs

#RUN { \
#        echo mysql-community-server mysql-community-server/data-dir select ''; \
#        echo mysql-community-server mysql-community-server/root-pass password ''; \
#        echo mysql-community-server mysql-community-server/re-root-pass password ''; \
#        echo mysql-community-server mysql-community-server/remove-test-db select false; \
#    } | debconf-set-selections && \
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server mysql-client \ 
libmysqlclient-dev libfontconfig1-dev

ENV dir /var/contact
ENV JAVA_HOME /usr/local/jdk1.8.0_141
ENV PATH $PATH:${JAVA_HOME}/bin
ENV SQL_FILE ${dir}/src/main/resources/schema.sql

COPY src ${dir}/src
COPY pom.xml mvnw ${dir}/
COPY .mvn ${dir}/.mvn

RUN sed -i "s/post.url=__blank/post.url=${POST_URL}/g" ${dir}/src/main/resources/a_little_config.txt

WORKDIR ${dir}

RUN sh -c "service mysql start && mysql -uroot < ${SQL_FILE} && ./mvnw clean install -DskipTests"

CMD sh -c "rm -rf /var/run/mysqld/mysqld.sock.lock && service mysql start && ./mvnw jetty:run"
