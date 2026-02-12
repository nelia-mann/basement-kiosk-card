import { html, LitElement } from 'lit';
import styles from './main.styles.js';

export class MainCard extends LitElement {

    // private properties
    _hass;

    // internal reactive states
    static get properties() {
        return {
        };
    }

    // establish config information for card
    setConfig() {
    }

    // gets the hass, and then creates the light bundles to be passed around.
    set hass(hass) {
        this._hass = hass;
    }

    static styles = styles;

    // return html
    render() {
        return html`
            <ha-card>
                Placeholder2
            </ha-card>
        `;
    }

    // set card size parameters for ha
    getCardSize() {
        return 8;
    }

    getGridOptions() {
        return {
            rows: 8,
            columns: 24,
            min_rows: 8,
            max_rows: 8
        }
    }

}