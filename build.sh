#! /bin/bash

tag=wds/contact:0.0.1

build(){
	docker build -t ${tag} .
}

start(){	
	if [ `docker ps -aqf name=contact`x!=''x  ]; then
		docker rm -f contact
	fi
	id=`docker run --net=host -d --name=contact ${tag}`
	docker logs -f ${id}
}

push(){
	docker push ${tag}
}

case $1 in
	build)
	build
	;;
	start)
	start
	;;
	push)
	push
	;;
esac
