#! /bin/bash

tag=wds/contact:0.0.1

build(){
	docker build -t ${tag} .
}

start(){	
	if [ {$1}x==""x ]; then
		echo "POST_URL is needed"
		exit(1)
	fi
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
	start $2
	;;
	push)
	push
	;;
esac
