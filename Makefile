.PHONY: run run-backend run-frontend test

run:
	@echo "===> Starting backend and frontend servers concurrently..."
	(cd Backend && ./gradlew bootRun) & \
	(cd Frontend && npm run dev) & \
	wait

test:
	@echo "===> Running backend tests..."
	(cd Backend && ./gradlew test)
	@echo "===> Running frontend tests..."
	(cd Frontend && npm install && npm test)
	@echo "===> Running e2e tests..."
	(cd E2ETests && npm install && npm test)
