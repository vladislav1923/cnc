start:
	docker-compose -f docker-compose.dev.yml up app

lint:
	docker-compose -f docker-compose.lint.yml up --abort-on-container-exit --exit-code-from app

test:
	docker-compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from app
