module.exports = {
  name: 'practica',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/practica',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
