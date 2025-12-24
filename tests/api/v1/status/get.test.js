test("GET api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpadatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpadatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.9");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});

test("Teste de SQL Injection", async () => {
  // await fetch ("http://localhost:3000/api/v1/status?databaseName=local_db");
  // await fetch ("http://localhost:3000/api/v1/status?databaseName=';");
  // await fetch ("http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4)");
  await fetch(
    "http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4); --",
  );
});
