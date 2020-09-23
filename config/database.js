module.exports = {

    database: 'test',
    username: 'mopa2',
    password: 'mopa251946',
    host: 'localhost',
    dialect: 'postgres',

    define: {
        timestamps: false,
    },

    logging: false,

    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }

}