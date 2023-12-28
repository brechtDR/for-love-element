import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class ForLove extends LitElement {
  static styles = css`
    :host {
      --_sway: var(--sway, 5);
      --_size: var(--heart-size, 3vw);
      --_color: var(--color, #F8C8DC);
      --_iteration: var(--iteration, infinite);
      --_duration: var(--duration, 10s);
      --_ease: var(--ease, ease-in-out);
    }

    .for-love-hearts {
      //position: absolute;
      position: fixed;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
    }


    @keyframes goToTopHeart {
      0% {
        opacity: 0;
        translate: 0 100vh;
        margin-left: calc(var(--_sway) * 1px);
      }
      10% {
        opacity: 1;
      }
      10%, 30%, 50%, 70%, 90% {
        margin-left: calc(var(--_sway) * -1px);
      }

      20%, 40%, 60%, 80%, 100% {
        margin-left: calc(var(--_sway) * 1px);
      }
      80% {
        opacity: 1;
      }
      100% {
        translate: 0 calc(var(--heart-size) / -1);
        opacity: 0;
      }
    }

    .heart {
      position: absolute;
      margin: auto;
      //top: calc(var(--_size) / -1);
      top: 0;
      opacity: 0;
      left: var(--left, 0);
      background-color: var(--_color);
      height: var(--_size);
      width: var(--_size);
      rotate: -45deg;
      pointer-events: none;
      animation: goToTopHeart var(--_duration) var(--_iteration) var(--_ease);
      animation-delay: calc(var(--delay) * .1s);
    }

    .heart:after {
      background-color: var(--_color);
      content: "";
      border-radius: 50%;
      position: absolute;
      width: var(--_size);
      height: var(--_size);
      top: 0px;
      left: calc(var(--_size) / 2);
    }

    .heart:before {
      background-color: var(--_color);
      content: "";
      border-radius: 50%;
      position: absolute;
      width:var(--_size);
      height: var(--_size);
      top: calc(var(--_size) / -2);
      left: 0;
    }

  `;

  @property({ type: Number }) amount = 10;
  @property({ type: Boolean }) multicolor = false;

  render() {
    return html`
        <slot></slot>
        <div class="for-love-hearts">
          ${Array(this.amount).fill('heart').map(index => {
            const randomNumberLeft = Math.floor(Math.random() * 101);
            const randomNumberTop = Math.floor(Math.random() * 101);
            const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];
            const color = this.multicolor ? colors[Math.floor(Math.random() * colors.length)] : 'red';

            return html`<div class="heart" style="--left: ${randomNumberLeft}vw; --delay: ${randomNumberTop}; ${this.multicolor ? `--_color: ${color}` : ""}"></div>`;
          })}
        </div>

    `;
  }
}
