module.exports = (DB, sequelize) => {
    return DB.define(`parcels`,
        {
            parcels_id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            pcl_providers_id: { type: sequelize.INTEGER },
            pcl_packages_id: { type: sequelize.INTEGER },
            pcl_sizes_id: { type: sequelize.INTEGER },
            pcl_colors_id: { type: sequelize.INTEGER },
            addresses_id: { type: sequelize.INTEGER },
            tracking: { type: sequelize.STRING },
            receiver_to: { type: sequelize.STRING },
            description: { type: sequelize.STRING },
            created_at: { type: sequelize.NOW },
            updated_at: { type: sequelize.NOW },
            deleted_at: { type: sequelize.DATE }
        },
        { 
            timestamps: false,
            freezeTableName: true,
            tableName: `parcels`
            
        }
    );
}