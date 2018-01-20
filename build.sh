#! /bin/bash

tag=wds/contact:0.0.1

build(){
	docker build -t ${tag} .
}

start(){	
	docker run --net=host -d --name=contact ${tag}
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
