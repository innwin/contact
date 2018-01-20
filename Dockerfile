FROM ubuntu

RUN wget --no-cookies --no-check-certificate --header \
"Cookie: gpw_e24=http://www.oracle.com/; oraclelicense=accept-securebackup-cookie" \
"http://download.oracle.com/otn-pub/java/jdk/8u141-b15/336fa29ff2bb4ef291e347e091f7f4a7/jdk-8u141-linux-x64.tar.gz" 

RUN tar /tmp/jdk-8u141-linux-x64.tar.gz -zxf -C /usr/local/ && \
rm -rf /tmp/jdk-8u141-linux-x64.tar.gz

ENV dir /var/contact
ENV JAVA_HOME /usr/local/jdk1.8.0_141
ENV PATH $PATH:${JAVA_HOME}/bin

COPY src ${dir}/src
COPY pom.xml mvnw ${dir}/
COPY .mvn ${dir}/.mvn
COPY phantomjs /usr/bin/

WORKDIR ${dir}

CMD ./mvnw jetty:run
