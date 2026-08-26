const connection = require("../database/connection")

const testConnection = (req, res) => {
    const result = connection.raw("SELECT 1+1 as result")

    console.log(result)

    return res.send()
}

module.exports = {
    testConnection
}