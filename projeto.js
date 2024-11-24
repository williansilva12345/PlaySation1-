const all = document.querySelectorAll("[data-anima]");
const anima = "animacao";

var div1 = document.getElementById("div1");

function animascroll() {
    var topo = window.pageYOffset + 500;
    all.forEach(function(element) {
        if (topo > element.offsetTop) {
            element.classList.add("animacao");
        } else {
            element.classList.remove("animacao");
        }
    });
}

if (all.length) {
    window.addEventListener("scroll", () => {
        animascroll();
    });
}
function clickmodal(img) {
    const janelaModal = document.getElementById("modal");
    const imgModal = document.getElementById("imgmodal");
    const txtModal = document.getElementById("txtmodal");
    const btnfechar = document.getElementById("closeModal");

    // Limpar o conteúdo anterior do txtModal
    txtModal.innerHTML = "";

    // Exibir modal
    janelaModal.classList.remove("closeModal1");
    janelaModal.classList.add("mostrarModal");

    // Definir a imagem e o texto no modal
    imgModal.src = img.src;

    // Fechar o modal ao clicar no botão
    btnfechar.addEventListener("click", () => {
        janelaModal.classList.add("closeModal1");
        janelaModal.classList.remove("mostrarModal");
    });

    // Alterar a cor de fundo do modal com base no 'alt' da imagem
    switch (img.alt) {
        case "img1":
            janelaModal.style.backgroundColor = "blue"; // Cor sólida
            txtModal.style.backgroundColor = "black";
            txtModal.style.width = "45%";

            // Criar conteúdo para o modal
            const div1 = document.createElement("div");
            const btn1 = document.createElement("button");
            btn1.style.width = "100px";
            btn1.classList.add("btnstyle1");
            btn1.innerHTML = "Confira já";

            div1.innerHTML = `
                <h1>"Seja Bem-Vindo ao Mundo de KOF 2002!"</h1>
                <p>KOF 2002</p>
                <p>The King of Fighters (KOF) é uma famosa franquia de jogos de luta criada pela SNK, que estreou em 1994. O jogo é conhecido por reunir personagens de várias séries de jogos da SNK, como Fatal Fury.</p>
            `;

            txtModal.appendChild(div1);
            txtModal.appendChild(btn1);
            break;

        case "img2":
            janelaModal.style.backgroundColor = "#ebae64"; // Cor sólida
            txtModal.style.backgroundColor = "black";
            txtModal.style.width = "45%";

            // Criar conteúdo para o modal
            const div2 = document.createElement("div");
            const btn2 = document.createElement("button");
            btn2.classList.add("btnstyle2");
            btn2.innerHTML = "Doom";

            div2.innerHTML = `
                <h1>"Explore Doom!"</h1>
                <p>Doom é um dos jogos de tiro mais icônicos, criando um gênero que ainda influencia muitos jogos de ação até hoje.</p>
				<p>O grande destaque de Doom foi seu motor gráfico revolucionário, que permitiu o uso de ambientes em 3D e uma experiência de imersão sem precedentes para a época, apesar do jogo ser na verdade uma combinação de gráficos 2D e um ambiente pseudo-3D. Além disso, Doom inovou na criação de mapas complexos, design de níveis desafiador e a presença de multiplayer, o que se tornou um marco para o surgimento de jogos online e competições de e-sports.</p>
            `;
            txtModal.appendChild(div2);
            txtModal.appendChild(btn2);
            break;

        case "img3":
             // Aplicando o gradiente específico para o img3
    janelaModal.style.background = "#a1241f"; // Gradiente
    txtModal.style.backgroundColor = "#ea6d4d";
    txtModal.style.width = "45%";

    // Criar conteúdo para o modal
    const div3 = document.createElement("div");
    const btn3 = document.createElement("button");
    btn3.innerHTML = "Crash";
    btn3.classList.add("btnstyle3");

    div3.innerHTML = `
        <h1>"Crash Bandicoot: Aventura Selvagem na Ilha"</h1>
        <p>Crash Bandicoot é um icônico jogo de plataforma criado pela Naughty Dog e lançado pela primeira vez em 1996 para o PlayStation. O jogo apresenta Crash, um marsupial com personalidade única, que embarca em uma jornada para derrotar o vilão Dr. Neo Cortex e salvar sua amada Tawna.</p>
    `;
    txtModal.appendChild(div3);
    txtModal.appendChild(btn3);
    break;
        case "img4":
            // Aplicando um fundo vermelho para o img4
            janelaModal.style.backgroundColor = "#fe8600";
            txtModal.style.backgroundColor = "black";
		    txtModal.style.width = "45%";

            const btn4 = document.createElement("button");
            btn4.classList.add("btnstyle4");

            // Criar conteúdo para o modal
            const div4 = document.createElement("div");
            div4.innerHTML = `
                <h1>"Metal Slug: A Batalha Sem Fim!"</h1>
				<P>Metal Slug es una icónica franquicia de videojuegos de acción y desplazamiento lateral, creada por Nazca Corporation y ahora propiedad de SNK. Lanzada inicialmente en las máquinas arcade Neo Geo, la serie es conocida por su estilo de arte en pixel, jugabilidad intensa y humor característico. Historia de Metal Slug</p>
                <p>Metal Slug é um jogo de tiro em 2D criado pela SNK, lançado originalmente em 1996. Ele se destaca por sua ação intensa, gráficos coloridos e um estilo de gameplay de "run and gun" (correr e atirar).</p>
            `;
            txtModal.appendChild(div4);
            txtModal.appendChild(btn4);
            btn4.innerHTML = "Metal Slug";
            break;

        default:
            janelaModal.style.backgroundColor = "gray"; // Cor padrão
            break;
    }
}
