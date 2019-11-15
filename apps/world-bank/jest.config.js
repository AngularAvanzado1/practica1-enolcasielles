module.exports = {
  name: 'world-bank',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/world-bank',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
