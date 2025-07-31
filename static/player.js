class Player {
    render(index) {
        document.querySelectorAll('.field')[index].innerHTML = this.generateSVG();
    }

    generateSVG() {
        return '';
    }
}

export class Cross extends Player {
    constructor() {
        super();
    }

    generateSVG() {
        const width = 80;

        const htmlCode = /*html*/ `
            <svg width="${width}" height="${width}">
                <line x1="0" y1="0" x2="${width}" y2="${width}" stroke="#ffc000" stroke-width="10"/>
                <line x1="${width}" y1="0" x2="0" y2="${width}" stroke="#ffc000" stroke-width="10"/>
            </svg>
        `;
        return htmlCode;
    }
}

export class Circle extends Player {
    constructor() {
        super();
    }

    generateSVG() {
        const width = 80;

        const htmlCode = /*html*/ `
            <svg width="${width}" height="${width}">
                <circle cx="${width / 2}" cy="${width / 2}" r="${width / 2 - 10}" stroke="#00c0ff" fill="none" stroke-width="10"/>
            </svg>
        `;
        return htmlCode;
        return 'O';
    }
}