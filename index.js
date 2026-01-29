// Common schemas
exports.baseSchema = require('./schemas/common/base.schema.json');
exports.stateSchema = require('./schemas/common/state.schema.json');
exports.bufferDistanceSchema = require('./schemas/common/buffer-distance.schema.json');

// Importer schemas
exports.importerSchemas = {
  census: require('./schemas/importers/census.schema.json'),
  arcgis: require('./schemas/importers/arcgis.schema.json'),
  transit: require('./schemas/importers/transit.schema.json'),
};

// Individual importer exports
exports.censusSchema = require('./schemas/importers/census.schema.json');
exports.arcgisSchema = require('./schemas/importers/arcgis.schema.json');
exports.transitSchema = require('./schemas/importers/transit.schema.json');
