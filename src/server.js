const app = require("./app")

const PORTA = 3000

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
})