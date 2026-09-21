.PHONY: up down logs re clean

up:
	docker compose up --build

down:
	docker compose down

logs:
	docker compose logs -f

re: down up

clean:
	docker compose down -v --rmi local
