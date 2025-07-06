function status(request, response) {
  response.status(200).json({ chave: "isso realmente está ficando legal" });
}

export default status;
