.PHONY: start stop build deploy restart

start:
	docker-compose up -d

stop:
	docker-compose down -v

build:
	docker-compose build

deploy:build start

restart:
	docker-compose restart
