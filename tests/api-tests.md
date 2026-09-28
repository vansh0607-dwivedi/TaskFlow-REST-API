# TaskFlow API Test Results

## 1. Get All Tasks

- Method: GET
- Endpoint: /api/tasks
- Expected Status: 200 OK
- Result: PASS

## 2. Get Single Task

- Method: GET
- Endpoint: /api/tasks/1
- Expected Status: 200 OK
- Result: PASS

## 3. Create Task

- Method: POST
- Endpoint: /api/tasks
- Expected Status: 201 Created
- Result: PASS

## 4. Update Task

- Method: PUT
- Endpoint: /api/tasks/1
- Expected Status: 200 OK
- Result: PASS

## 5. Delete Task

- Method: DELETE
- Endpoint: /api/tasks/1
- Expected Status: 204 No Content
- Result: PASS

## 6. Invalid Task ID

- Method: GET
- Endpoint: /api/tasks/999
- Expected Status: 404 Not Found
- Result: PASS

## 7. Invalid Task Creation

- Method: POST
- Endpoint: /api/tasks
- Body: {}
- Expected Status: 400 Bad Request
- Result: PASS
