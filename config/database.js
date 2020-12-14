module.exports = {

    //database: 'soaV2',
    database: 'd40093ds413j31',
    //username: 'postgres',
    username: 'azhqwyqfnggulg',
    //password: '171117',
    password: '6a147d69fc5d64acd7a7e092d0b7dcea56c2fe4f38daf008bce50c020bc2edc1',
   // host: 'localhost',
    host: 'ec2-54-157-66-140.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: ' 5432',

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