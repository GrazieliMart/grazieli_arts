/* ==========================================================
   site.js - componentes reutilizáveis do site da Grazieli
   Em cada página basta ter as divs com os ids abaixo:
   #header  #hero  #galeria-gatitos  #galeria-pessoais  #disponiveis  #sobre-mim  #como-comprar  #outras-obras  #lightbox  #footer
   ========================================================== */

/* ---------- 1. DADOS DAS OBRAS (edite só aqui) ---------- */
const galerias = {
    "galeria-gatitos": {
        titulo: "Os gatitos medievais | Pinturas Pessoais",
        subtitulo: "Autoral | Pintura a Óleo, 10x15 cm",
        obras: [
            { nome: "Nero, o Rei",          img: "assets/imgs/obras/nero.jpeg",     alt: "Pintura a Óleo de um gato medieval" },
            { nome: "Athena, a Feiticeira", img: "assets/imgs/obras/athena.jpeg",   alt: "Pintura a Óleo de um gato mago" },
            { nome: "Kassadin, o Bardo",    img: "assets/imgs/obras/kassadin.jpeg", alt: "Pintura a Óleo de um gato cantor" },
            { nome: "Melanie, a Duquesa",   img: "assets/imgs/obras/melanie.jpeg",  alt: "Pintura a Óleo de gata medieval" }
        ]
    },
    "galeria-pessoais": {
        titulo: "Pinturas pessoais",
        subtitulo: "Autoral | Pintura a Óleo, 10x15 cm",
        obras: [
            { nome: "Novo Dia",     img: "assets/imgs/obras/novo-dia.jpeg",     alt: "Pintura a Óleo" },
            { nome: "Pequeno Amor", img: "assets/imgs/obras/pequeno-amor.jpeg", alt: "Pintura a Óleo" }
        ]
    }
};

/* Obras que aparecem no slider "Outras obras" (a obra da página atual é ocultada sozinha) */
const outrasObras = [
    { nome: "Maçã", img: "/assets/imgs/obras/maca (1).webp", link: "obra-grazieli-maca.html" },
    { nome: "Relíquia", img: "/assets/imgs/obras/reliquia (3).webp", link: "obra-grazieli-reliquia.html" },
];

/* Obras à venda (seção "Obras disponíveis") */
const obrasDisponiveis = [
    {
        nome: "Maçã | Óleo sobre papel",
        img: "/assets/imgs/obras/maca (2).webp",
        alt: "Pintura a óleo a venda | Tela à óleo | Obra de arte original | Pintura de maçã em óleo",
        link: "/obra-grazieli-maca.html"
    },
    {
        nome: "Relíquia | Óleo sobre papel",
        img: "/assets/imgs/obras/reliquia (3).webp",
        alt: "Pintura a óleo a venda | Tela à óleo | Obra de arte original | Pintura de realista em óleo",
        link: "/obra-grazieli-reliquia.html"
    }
];

/* Seção "Sobre mim" (edite a foto e o texto) */
const sobreMim = {
    titulo: "Sobre mim",
    foto: "assets/imgs/grazieli.jpeg",
    alt: "Grazieli Martins, artista de pintura a óleo, em seu ateliê",
    textos: [
        "Olá, eu sou a Grazieli! Pinto à óleo e crio cada obra à mão, com carinho e dedicação.",
        "Pintar é a forma que encontrei de deixar minha alma fazer aquilo que ela anseia. Espero que minhas obras cheguem até você."
    ]
};

/* Contato para quem quer comprar (troque pelos seus dados reais) */
const contato = {
    whatsapp: "5511999999999",          // só números: 55 + DDD + número
    email: "seuemail@exemplo.com"
};

/* ---------- 2. COMPONENTES ---------- */
const componentes = {
    header: `
        <header>
            <div class="logo">Grazieli</div>
            <nav>
                <a href="index.html">Início</a>
                <a href="obras-a-venda.html">Disponíveis</a>
                <a href="artes.html">Portfólio</a>
                <a href="contato.html">Contato</a>
                <a href="sobre.html">Sobre a artista</a>
                <a href="https://www.instagram.com/grazieliarts/" target="_blank" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                <a href="https://www.youtube.com/@Grazieli_Arts" target="_blank" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                <a href="https://www.tiktok.com/@_grazieliarts" target="_blank" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
                <div class="gtranslate_wrapper"></div>
            </nav>
        </header>`,

    hero: `
        <section class="hero">
            <video autoplay muted loop playsinline>
                <source src="videos/banner.mp4" type="video/mp4">
            </video>
            <div class="overlay"></div>
            <div class="hero-content">
                <h1>Grazieli Martins</h1>
                <p>Bem-vindo ao meu ateliê! <br>Cada obra é criada com um simples intuito: <br>permitir que minha alma faça aquilo que ela anseia</p>
                <a href="artes.html" class="btn">Conheça meu trabalho</a>
            </div>
        </section>`,

    lightbox: `
        <span class="fechar">&times;</span>
        <img id="imagemExpandida" alt="Obra ampliada">`,

    footer: `
        <footer>
            <p>© 2026 Grazieli Artes. Todos os direitos reservados.</p>
        </footer>`
};

function montarGaleria({ titulo, subtitulo, obras }) {
    const itens = obras.map(o => `
        <div>
            <h2>${o.nome}</h2><br>
            <img src="${o.img}" alt="${o.alt}" loading="lazy">
        </div>`).join("");

    return `
        <div class="titulo">
            <h1>${titulo}</h1>
            <p>${subtitulo}</p>
        </div>
        <section class="galeria">${itens}</section>`;
}

function montarSobreMim(container) {
    container.className = "sobre-mim";
    container.innerHTML = `
        <img src="${sobreMim.foto}" alt="${sobreMim.alt}" loading="lazy">
        <div class="sobre-texto">
            <h2>${sobreMim.titulo}</h2>
            ${sobreMim.textos.map(t => `<p>${t}</p>`).join("")}
        </div>`;
}

function montarComoComprar(container) {
    // Usa o nome da obra (h1 da página) para já preencher a mensagem
    const titulo = document.querySelector(".obra-info h1");
    const obra = titulo ? titulo.textContent.trim() : "";
    const assunto = obra ? `Tenho interesse na obra "${obra}"` : "Tenho interesse em uma obra";

    const linkWhats = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent("Olá, Grazieli! " + assunto + ".")}`;
    const linkEmail = `mailto:${contato.email}?subject=${encodeURIComponent(assunto)}`;

    container.className = "como-comprar";
    container.innerHTML = `
        <hr class="obra-linha">
        <h2>Como adquirir esta obra</h2>
        <p>Se deseja adquirir uma obra, entre em contato comigo pelo meu WhatsApp ou <a href="/contato.html"> e-mail de contato</a></p>
        <div class="contato-botoes">
            <a href="${linkWhats}" target="_blank" rel="noopener" class="btn-contato">
                <i class="bi bi-whatsapp"></i> WhatsApp
            </a>
          
        </div>`;
}

function montarDisponiveis(container) {
    const itens = obrasDisponiveis.map(o => `
        <div class="obra-venda">
            <img src="${o.img}" alt="${o.alt}" loading="lazy">
            <h2>${o.nome}</h2>
            <a href="${o.link}" class="btn-conferir">Conferir</a>
        </div>`).join("");

    container.className = "disponiveis";
    container.innerHTML = itens;
}

function montarSlider(container) {
    const paginaAtual = location.pathname.split("/").pop();
    const itens = outrasObras
        .filter(o => o.link !== paginaAtual)
        .map(o => `
            <a class="slider-item" href="${o.link}">
                <img src="${o.img}" alt="${o.nome}" loading="lazy">
                <span>${o.nome}</span>
            </a>`).join("");

    container.className = "outras-obras";
    container.setAttribute("aria-label", "Outras obras");
    container.innerHTML = `
        <div class="outras-topo">
            <h2>Outras obras</h2>
            <div class="slider-botoes">
                <button type="button" class="slider-anterior" aria-label="Obras anteriores"><i class="bi bi-chevron-left"></i></button>
                <button type="button" class="slider-proximo" aria-label="Próximas obras"><i class="bi bi-chevron-right"></i></button>
            </div>
        </div>
        <div class="slider-trilho">${itens}</div>`;

    const trilho = container.querySelector(".slider-trilho");
    const passo = () => trilho.clientWidth * 0.8;
    container.querySelector(".slider-proximo").addEventListener("click", () => trilho.scrollBy({ left: passo() }));
    container.querySelector(".slider-anterior").addEventListener("click", () => trilho.scrollBy({ left: -passo() }));
}

/* ---------- 3. INSERE NAS DIVS ---------- */
document.addEventListener("DOMContentLoaded", () => {

    // Componentes simples: o id da div é o nome do componente
    ["header", "hero", "footer"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = componentes[id];
    });

    // Tradutor (GTranslate): precisa carregar depois que o header existe.
    // Scripts colocados via innerHTML não executam, por isso é criado aqui.
    if (document.querySelector(".gtranslate_wrapper")) {
        window.gtranslateSettings = {
            default_language: "pt",
            native_language_names: true,
            detect_browser_language: true,
            languages: ["pt", "en"],
            wrapper_selector: ".gtranslate_wrapper",
            flag_size: 24,
            alt_flags: { pt: "brazil" }
        };
        const gt = document.createElement("script");
        gt.src = "https://cdn.gtranslate.net/widgets/latest/flags.js";
        gt.defer = true;
        document.body.appendChild(gt);
    }

    // Galerias: o id da div é a chave em "galerias"
    Object.keys(galerias).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = montarGaleria(galerias[id]);
    });

    // Sobre mim
    const sobre = document.getElementById("sobre-mim");
    if (sobre) montarSobreMim(sobre);

    // Como adquirir (página da obra)
    const comoComprar = document.getElementById("como-comprar");
    if (comoComprar) montarComoComprar(comoComprar);

    // Obras disponíveis
    const disponiveis = document.getElementById("disponiveis");
    if (disponiveis) montarDisponiveis(disponiveis);

    // Slider "Outras obras"
    const slider = document.getElementById("outras-obras");
    if (slider) montarSlider(slider);

    // Preço em dólar quando o idioma escolhido é inglês
    // Uso: <dd class="preco notranslate" data-usd="US$ 65.00">R$ 330,00</dd>
    const precos = document.querySelectorAll(".preco[data-usd]");
    if (precos.length) {
        precos.forEach(p => { if (!p.dataset.brl) p.dataset.brl = p.textContent.trim(); });

        const emIngles = () =>
            /googtrans=\/[^\/;]+\/en/.test(document.cookie) ||
            document.documentElement.classList.contains("translated-ltr") ||
            document.documentElement.lang.toLowerCase().startsWith("en");

        const atualizarPreco = () => {
            const ingles = emIngles();
            precos.forEach(p => { p.textContent = ingles ? p.dataset.usd : p.dataset.brl; });
        };

        atualizarPreco();

        // O tradutor muda a classe/lang do <html> quando troca de idioma
        new MutationObserver(atualizarPreco)
            .observe(document.documentElement, { attributes: true, attributeFilter: ["class", "lang"] });

        // Reforço: confere de novo logo após clicar nas bandeiras
        document.addEventListener("click", e => {
            if (e.target.closest(".gtranslate_wrapper")) {
                setTimeout(atualizarPreco, 500);
                setTimeout(atualizarPreco, 1500);
            }
        });
    }

    // Lightbox
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = componentes.lightbox;

        const imagem = document.getElementById("imagemExpandida");
        const fechar = () => { lightbox.style.display = "none"; };

        // Um único listener funciona para qualquer galeria da página
        document.addEventListener("click", e => {
            const foto = e.target.closest(".galeria img, .obra-fotos img");
            if (foto) {
                imagem.src = foto.src;
                imagem.alt = foto.alt;
                lightbox.style.display = "flex";
            }
        });

        lightbox.querySelector(".fechar").addEventListener("click", fechar);
        lightbox.addEventListener("click", e => { if (e.target === lightbox) fechar(); });
        document.addEventListener("keydown", e => { if (e.key === "Escape") fechar(); });
    }
});

/* ---------- 4. GOOGLE ANALYTICS ---------- */
(function () {
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=G-93WVNLNM52";
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", "G-93WVNLNM52");
})();