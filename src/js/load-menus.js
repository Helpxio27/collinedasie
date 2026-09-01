function loadMenuFragment(name) {
    const container = document.getElementById('menu-' + name) || document.querySelector('.about-menu');
    if (!container) return;

    fetch('src/menus/menu-' + name + '.html')
        .then(function (r) {
            if (!r.ok) throw new Error('Failed to load menu fragment');
            return r.text();
        })
        .then(function (html) {
            container.innerHTML = html;
            transformMenuParagraphs(container);
        })
        .catch(function (err) {
            console.error(err);
        });
}

function transformMenuParagraphs(menu) {
    const paragraphs = menu.querySelectorAll('p');

    paragraphs.forEach(function (p) {
        if (p.querySelector('strong')) return; // category heading

        const html = p.innerHTML.trim();

        const priceRegex = /^(.*?)(\.{3,})(\d+[,.]\d{2}\s*€)(?:\s*[—-]\s*(.*))?$/s;
        const match = html.match(priceRegex);

        if (match) {
            const name = match[1].trim();
            const price = match[3].trim();
            const description = match[4] ? match[4].trim() : '';

            p.classList.add('menu-item');
            p.innerHTML =
                '<span class="menu-name">' + name + '</span>' +
                '<span class="menu-dots"> ........ </span>' +
                '<span class="menu-price">' + price + '</span>' +
                (description ? '<span class="menu-description">' + description + '</span>' : '');
            return;
        }

        const br = p.querySelector('br');
        if (br) {
            const parts = p.innerHTML.split(/<br\s*\/?\s*>/i);
            const firstText = parts[0].replace(/<[^>]+>/g, '').trim();
            const menuMatch = firstText.match(/^(.*?)(\.{3,})(\d+[,.]\d{2}\s*€)$/);

            if (menuMatch) {
                const rest = parts.slice(1).join('<br>').trim();
                p.classList.add('menu-item');
                p.innerHTML =
                    '<span class="menu-name">' + menuMatch[1].trim() + '</span>' +
                    '<span class="menu-dots"> ........ </span>' +
                    '<span class="menu-price">' + menuMatch[3].trim() + '</span>' +
                    '<span class="menu-description-block">' + rest + '</span>';
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // load clignancourt menu on this page
    if (document.getElementById('menu-clignancourt')) {
        loadMenuFragment('clignancourt');
    }
});
