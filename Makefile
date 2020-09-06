include .env

# comands to docker

.PHONY: up

up:
	# docker-compose up -d
	docker-compose up

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f

# comands to database of app

.PHONY: migrate

migrate:
	docker-compose exec api yarn run knex:migrate

.PHONY: rollback

rollback:
	docker-compose exec api yarn run knex:rollback