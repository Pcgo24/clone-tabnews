import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS resultado");
  console.log(result.rows);
  response.status(200).json({ chave: "isso realmente está ficando legal" });
}

export default status;
