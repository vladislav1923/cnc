start:
	docker-compose -f docker-compose.dev.yml up app

lint:
	docker-compose -f docker-compose.lint.yml up app
