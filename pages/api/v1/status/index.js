import database from "infra/database.js";

async function status(request, response) {
  try {
    const result = await database.query("SELECT 1 + 1 AS resultado");
    console.log(result.rows);
    return response
      .status(200)
      .json({ chave: "isso realmente está ficando legal" });
  } catch (err) {
    // Se o banco não estiver disponível, retornamos um 200 com informação reduzida
    console.error("Falha ao conectar no banco de dados: ", err?.message || err);
    return response
      .status(200)
      .json({ chave: "serviço ok", db: "indisponivel" });
  }
}
// This file is used to handle the status endpoint of the API.

export default status;
