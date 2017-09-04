import { expect } from 'chai';
import name from '../app/author';

describe('FlappyBird Test Suite', () => {
  it('is written by Yair, a.k.a. @agzeri', () => {
    const GAME = 'Flappy Bird';

    expect(GAME).to.equal('Flappy Bird');
  });

  it('return the author name', () => {
    const actual = name('agzeri');

    expect(actual).to.equal('@agzeri');
  });
});
