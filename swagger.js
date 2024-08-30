const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./index.ts']

swaggerAutogen(outputFile, endpointsFiles)

// ,'./routes/ReportRoute','./routes/ProfileRoute'