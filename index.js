// Common schemas
exports.baseSchema = require('./schemas/common/base.schema.json');
exports.stateSchema = require('./schemas/common/state.schema.json');
exports.bufferDistanceSchema = require('./schemas/common/buffer-distance.schema.json');

// Importer schemas
exports.importerSchemas = {
  census: require('./schemas/importers/census.schema.json'),
  arcgis: require('./schemas/importers/arcgis.schema.json'),
  transit: require('./schemas/importers/transit.schema.json'),
  lodes: require('./schemas/importers/lodes.schema.json'),
  schools: require('./schemas/importers/schools.schema.json'),
  spreadsheet: require('./schemas/importers/spreadsheet.schema.json'),
  geopackage: require('./schemas/importers/geopackage.schema.json'),
  geodatabase: require('./schemas/importers/geodatabase.schema.json'),
  amenity: require('./schemas/importers/amenity.schema.json'),
  osm: require('./schemas/importers/osm.schema.json'),
  crexi: require('./schemas/importers/crexi.schema.json'),
  'data-axle': require('./schemas/importers/data-axle.schema.json'),
  nppes: require('./schemas/importers/nppes.schema.json'),
  'food-access': require('./schemas/importers/food-access.schema.json'),
};

// Individual importer exports
exports.censusSchema = require('./schemas/importers/census.schema.json');
exports.arcgisSchema = require('./schemas/importers/arcgis.schema.json');
exports.transitSchema = require('./schemas/importers/transit.schema.json');
exports.lodesSchema = require('./schemas/importers/lodes.schema.json');
exports.schoolsSchema = require('./schemas/importers/schools.schema.json');
exports.spreadsheetSchema = require('./schemas/importers/spreadsheet.schema.json');
exports.geopackageSchema = require('./schemas/importers/geopackage.schema.json');
exports.geodatabaseSchema = require('./schemas/importers/geodatabase.schema.json');
exports.amenitySchema = require('./schemas/importers/amenity.schema.json');
exports.osmSchema = require('./schemas/importers/osm.schema.json');
exports.crexiSchema = require('./schemas/importers/crexi.schema.json');
exports.dataAxleSchema = require('./schemas/importers/data-axle.schema.json');
exports.nppesSchema = require('./schemas/importers/nppes.schema.json');
exports.foodAccessSchema = require('./schemas/importers/food-access.schema.json');

// Helper to generate placeholder YAML from schema
exports.generatePlaceholderYaml = function(schema) {
  if (!schema || !schema.properties) return '';

  const lines = [];
  const required = schema.required || [];
  const parcell = schema['x-parcell'];

  // Add parcell metadata if present
  if (parcell) {
    lines.push('parcell:');
    lines.push(`  service: ${parcell.service}`);
    lines.push(`  action: ${parcell.action}`);
    lines.push('');
  }

  // Add required fields with blank values
  for (const field of required) {
    const prop = schema.properties[field];
    if (!prop) continue;

    const comment = prop.description ? `  # ${prop.description}` : '';
    lines.push(`${field}:${comment}`);
  }

  return lines.join('\n') + '\n';
};
