const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');
  // console.log(baseConfig);

  it('entry', () => {
    assert.equal(
      baseConfig.entry.index,
      'C:/Users/Sijia/Desktop/code/github.com/geekbang-webpack-lesson/code/chapter04/builder-webpack/test/smoke/template/src/index/index.js'
    );
    assert.equal(
      baseConfig.entry.search,
      'C:/Users/Sijia/Desktop/code/github.com/geekbang-webpack-lesson/code/chapter04/builder-webpack/test/smoke/template/src/search/index.js'
    );
  });
});
