module.exports = {

    database: 'soaV2',
    username: 'postgres',
    password: '171117',
    host: 'localhost',
    dialect: 'postgres',

    define: {
        timestamps: false,
    },

    logging: false,
/*
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }*/

}