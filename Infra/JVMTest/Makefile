.PHONY: build run-serial

build:
	docker build -t gc-checker .

run-serial:
	docker run --rm --cpus="1.0" -m "1g" gc-checker

run-g1gc:
	docker run --rm --cpus="2.0" -m "2g" gc-checker
