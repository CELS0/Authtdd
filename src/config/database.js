module.exports = {
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  dialect: 'postgres',
  operatorAliases: false,
  logging: false,
  defines: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};