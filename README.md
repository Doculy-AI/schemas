# Yuli Config Schemas

JSON schemas for validating Yuli configuration files.

## Structure

```
schemas/
├── common/           # Shared definitions
│   ├── base.schema.json
│   ├── state.schema.json
│   └── buffer-distance.schema.json
├── importers/        # Importer configuration schemas
│   ├── census.schema.json
│   ├── arcgis.schema.json
│   ├── transit.schema.json
│   └── ...
├── actions/          # Action configuration schemas
│   └── ...
└── tools/            # Tool configuration schemas
    └── ...
```

## Usage

Schemas are served directly from GitHub. Use raw URLs:

```
https://raw.githubusercontent.com/Doculy-AI/schemas/main/schemas/importers/census.schema.json
```

### In Monaco Editor

```typescript
monaco.languages.yaml.yamlDefaults.setDiagnosticsOptions({
  schemas: [{
    uri: 'https://raw.githubusercontent.com/Doculy-AI/schemas/main/schemas/importers/census.schema.json',
    fileMatch: ['**/census.yaml']
  }]
});
```

### In YAML files

```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/Doculy-AI/schemas/main/schemas/importers/census.schema.json
state: TX
datatype: tract
```

## Development

### Install dependencies

```bash
npm install
```

### Validate schemas

```bash
npm run validate
```

### Adding new schemas

1. Create the schema file in the appropriate directory
2. Follow the naming convention: `{name}.schema.json`
3. Include `$schema` and `$id` properties
4. Run `npm run validate` to check for errors
5. Submit a PR to main

## CI/CD

GitHub Actions automatically validates all schemas on:
- Push to main
- Pull requests to main
