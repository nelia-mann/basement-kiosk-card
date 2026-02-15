import { html, LitElement } from 'lit';
import './light-icon.js';
import './popout-window.js';
import styles from './light.styles.js';
import sharedStyles from './shared-styles.js';
import { interpolateRGB, OFF, ONLIGHT, rgba } from './color-util.js';

export class LightButton extends LitElement {

    _structure = {};
    _entityIds = [];
    _initialized = false;

    static get properties() {
        return {
            _states: { state: true },
            _changedEntityIds: { state: true },
            _isSelected: { state: true}
        }
    }

    isSolo(lightId) {
        return !(this._states[lightId].attributes.entity_id);
    }

    getLightData() {
        let on = 0;
        let tot = 0;
        this._entityIds.forEach((lightId) => {
            if (this.isSolo(lightId)) {
                tot = tot + 1;
                const state = this._states[lightId].state;
                (state === "on") && (on = on + 1);
            }
        })
        return [on, tot];
    }

    // determines the shade of color associated with a particular floor id, based on
    // the fraction of the lights that are on.
    getRGB(opacity) {
        const onTot = this.getLightData();
        const rgb = interpolateRGB(OFF, ONLIGHT, onTot[0] / onTot[1])
        return rgba(rgb, opacity);
    }

    getStyles() {
        let styles = {
            'background-color': this.getRGB(0.5)
        }
        if (this._isSelected) {
            styles['outline'] = `solid ${this.getRGB(1)}`;
            styles['outline-offset'] = '-4px';
        }
        return styles;
    }

}

customElements.define("light-button", LightButton);