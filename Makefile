CURRENT_DIRECTORY := $(shell pwd)

DCMP = docker-compose
NPM = npm

start-local:
	${NPM} run start && make back

stop-local:
	${DCMP} stop back

back:
	${DCMP} run -p 3001:3000 -d --rm back

front:
	${DCMP} run -p 8080:5000 -d --rm front