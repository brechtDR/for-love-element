import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { ForLove } from '../src/ForLove.js';
import '../src/for-love.js';

describe('ForLove', () => {


  it('passes the a11y audit', async () => {
    const el = await fixture<ForLove>(html`<for-love></for-love>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
