module.exports = (fs, path, sequelize, configs) => {
    let models = {};
    const DB = new sequelize("nest8-dev", "postgres", configs.databasePassword, {
        host: configs.databaseHost,
        dialect: "postgres",
        dialectOptions: {
            useUTC: true,
            dateStrings: true
        }
    });
    DB.authenticate().then(() => {
        const normalizedPath = path.join(__dirname);
        if(normalizedPath.length > 0){
            fs.readdirSync(normalizedPath).forEach((element, key) => {
                let findFiles = element.split(`.js`)[0];
                if (findFiles != "index") {
                    models[`${findFiles}`] = require(path.join(normalizedPath, findFiles))(DB, sequelize);
                }
            });
        }
    }).catch((error) => {
        console.error(`Unable to connect to the database `, error);
    });
    models.sequelize = sequelize;
    models.DB = DB;
    return models;
}