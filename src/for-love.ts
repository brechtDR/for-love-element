import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js'
@customElement('for-love')
export class ForLove extends LitElement {


    @property({ type: Boolean }) multicolor = false;
    @property({ type: Boolean }) scrollWithWindow = false;

    private _maxAmount = 400; // Set your maximum value here

    @property({ type: Number })
    get amount() {
        return this._amount;
    }

    set amount(value: number | string) {
        const parsedValue = typeof value === 'number' ? value : parseInt(value);

        // Check if the parsed value is a valid number
        if (!isNaN(parsedValue)) {
            // Set the value to the maximum if it exceeds the maximum allowed
            this._amount = Math.min(parsedValue, this._maxAmount);
        } else {
            console.warn('Invalid value for amount property. Please provide a valid number.');
        }

        this.requestUpdate('amount'); // Notify LitElement to update the property
    }

    private _amount = 10;


    static styles = css`
    :host {
      --_color: var(--fl-heart-color, #F8C8DC);
      --_size: var(--fl-heart-size, 3vw);
      --_sway: var(--fl-sway, 5);
      --_iteration: var(--fl-iteration, infinite);
      --_duration: var(--fl-duration, 10s);
      --_ease: var(--fl-ease, ease-in-out);
    }

    .for-love-hearts {
      position: fixed;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
    }


    @keyframes goToTopHeart {
      0% {
        opacity: 0;
        translate: 0 100vh;
        scale: .2;
        margin-left: calc(var(--_sway) * 1px);
      }
      10% {
        opacity: 1;
      }
      18% {
        scale: 1;
      }
      10%, 30%, 50%, 70%, 90% {
        margin-left: calc(var(--_sway) * -1px);
      }

      20%, 40%, 60%, 80%, 100% {
        margin-left: calc(var(--_sway) * 1px);
      }
      80% {
        opacity: 1;
        scale: 1;
      }
      100% {
        translate: 0 -100%;
        opacity: 0;
        scale: 0;
      }
    }

      @keyframes goToTopHeartContained {
        0% {
          opacity: 0;
          top: 100%;
          scale: .2;
          margin-left: calc(var(--_sway) * 1px);
        }
        10% {
          opacity: 1;
        }
        18% {
          scale: 1;
        }
        10%, 30%, 50%, 70%, 90% {
          margin-left: calc(var(--_sway) * -1px);
        }

        20%, 40%, 60%, 80%, 100% {
          margin-left: calc(var(--_sway) * 1px);
        }
        80% {
          opacity: 1;
          scale: 1;
        }
        100% {
          top: 0;
          opacity: 0;
          scale: 0;
        }
      }
      
    .heart {
      position: absolute;
      top: 0;
      margin: auto;
      left: var(--left, 0);
      height: var(--_size);
      width: var(--_size);
      background-color: var(--_color);
      opacity: 0;
      rotate: -45deg;
      pointer-events: none;
      animation: goToTopHeart var(--_duration) var(--_iteration) var(--_ease);
      animation-delay: calc(var(--delay) * .1s);
    }

    .heart::after, .heart::before {
      background-color: var(--_color);
      content: "";
      border-radius: 50%;
      position: absolute;
      width: var(--_size);
      height: var(--_size);
      top: 0px;
      left: calc(var(--_size) / 2);
    }

    .heart::before {
      top: calc(var(--_size) / -2);
      left: 0;
    }

    :host([contained]) .for-love-hearts{
      position: absolute;
    }

    :host([contained]) .heart {
      animation-name: goToTopHeartContained;
    }

    @media (prefers-reduced-motion) {
      .heart, .for-love-hearts {
        display: none;
        animation: none;
      }
    }
    
  `;

    render() {
        return html`
        <slot></slot>
        <div class="for-love-hearts" part="hearts-container">
          ${Array(this.amount).fill('heart').map(index => {
            const randomNumberLeft = Math.floor(Math.random() * 101);
            const randomNumberDelay = Math.floor(Math.random() * 101);
            const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];
            const color = this.multicolor ? colors[Math.floor(Math.random() * colors.length)] : 'red';

            return html`<div class="heart" data-item="${index}" style="--left: ${randomNumberLeft}%; --delay: ${randomNumberDelay}; ${this.multicolor ? `--_color: ${color}` : ""}"></div>`;
        })}
        </div>

    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'for-love': ForLove
    }
}
