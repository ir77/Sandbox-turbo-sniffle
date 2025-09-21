.PHONY: run run-backend run-frontend test clean

clean:
	@echo "===> Killing process on port 8080..."
	@lsof -t -i:8080 | xargs -r kill -9
	@echo "===> Killing process on port 5173..."
	@lsof -t -i:5173 | xargs -r kill -9

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
