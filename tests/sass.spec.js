import path from 'path';
import sass from 'sass-true';

const sass_index = 'sass/index.scss';
const file = path.join(__dirname, sass_index);

sass.runSass({ file }, describe, it);
