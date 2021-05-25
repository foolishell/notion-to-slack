.PHONY: build run

init:
	cp .env.example .env
build:
	docker build -t notion-to-slack:latest --no-cache . 
run:
	DOCKER_CONTENT_TRUST=0 docker run -p 8080:8080 --rm notion-to-slack:latest