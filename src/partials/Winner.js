import {
    SVG_NS
} from '../settings';

export default class Winner {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    
    render(svg, winner) {
        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'size', this.size);
        text.setAttributeNS(null, 'fill', 'black');
        text.setAttributeNS(null, 'font-family', 'Silkscreen Web');
        text.textContent = winner;

        svg.appendChild(text);

        let text2 = document.createElementNS(SVG_NS, 'text');
        text2.setAttributeNS(null, 'x', this.x - 100);
        text2.setAttributeNS(null, 'y', this.y + 20);
        text2.setAttributeNS(null, 'size', this.size);
        text2.setAttributeNS(null, 'fill', 'black');
        text2.setAttributeNS(null, 'font-family', 'Silkscreen Web');
        text2.textContent = 'press spacebar to start a new game';

        svg.appendChild(text2);
    }


}