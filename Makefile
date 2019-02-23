CURRENT_DIRECTORY := $(shell pwd)

DCMP = docker-compose
NPM = npm

start-local:
	make back && ${NPM} run start:local

stop-local:
	${DCMP} stop back && \
	${DCMP} down

back:
	${DCMP} run -p 3001:3000 -d --rm back

front:
	${DCMP} run -p 8080:5000 -d --rm front