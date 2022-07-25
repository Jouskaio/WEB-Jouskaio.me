const fractal = module.exports = require('visual-identity');
const fs = require('fs');
const path = require('path');

// any other custom, instance specific configuration here if needed

// BASIC INTERACTIONS
/** Configuration
 * @type {{description: string}} : describe
 */
var config = {
  description: 'Lists components in the project',
};

function listComponents(args, done){
  const app = this.fractal;
  for (let item of app.components.flatten()) {
    this.log(`${item.handle} - ${item.status.label}`);
  }
  done();
};

fractal.cli.command('list-components', listComponents, config);

/**
 * Accepting arguments
 */

fractal.cli.command('foo <requiredArg> [optionalArg] [anotherOptionalArg]', function(args, done){
  console.log(args.requiredArg);
  done();
});

/**
 * Fractal export command.
 *
 * Exports all view templates into a directory in the root of the project.
 * Templates are exported in a flat structure with the filenames in the format of {handle}.{ext}
 * Requires either an output directory that exists, or uses `exported` if it exists
 *
 * Any @handle references in the templates (for partial includes etc) are re-written
 * to reference the appropriate template path.
 *
 * Run by using the command `fractal export` in the root of the project directory.
 */
function exportTemplates(args, done) {

  const app = this.fractal;
  const items = app.components.flattenDeep().toArray();
  const jobs = [];

  for (const item of items) {

    const exportPath = path.join('./', args.options.output || 'styles', `${item.alias || item.handle}${app.get('components.ext')}`);
    const job = item.getContent().then(str => {
      return str.replace(/\@([0-9a-zA-Z\-\_]*)/g, function(match, handle){
        return `${handle}${app.get('components.ext')}`;
      });
    }).then(str => {
      return fs.writeFileSync(exportPath, str);
    });

    jobs.push(job);
  }

  return Promise.all(jobs);
}

fractal.cli.command('export', exportTemplates,  {
  description: 'Export all component templates',
  options: [
    ['-o, --output <output-dir>', 'The directory to export components into, relative to the CWD.'],
  ]
});
