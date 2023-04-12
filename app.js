let quantidade = 1
async function getJogos() {
    let url = `http://localhost:8000/api/v1/jogos/today`

    let results = await fetch(url)
    let json = await results.json()


    json.forEach(element => {
        
        let carrouselInner = document.getElementsByClassName("carousel-inner")
        var carrouselItem = document.getElementsByClassName("carousel-item")
        let lastCarrouselitem = carrouselItem[carrouselItem.length - 1]
        if (quantidade % 2 != 0 && quantidade != 1) {
            // cria um carrousel item
            let divCarrouselItem = document.createElement("div")
            divCarrouselItem.classList.add("carousel-item");
            divCarrouselItem.classList.add("p-4");
            divCarrouselItem.setAttribute("data-bs-interval", "7000");

            // cria o card
            divCard = document.createElement("div")
            divCard.classList.add("card-jogo");

            lado1 = document.createElement("div")
            lado1.classList.add("lado1")

            p1 = document.createElement("p")
            p1.classList.add("title--team")
            p1.innerHTML = `${element.time1_nome}`

            lado1.appendChild(p1)

            divCard.appendChild(lado1)


            divVs = document.createElement("div")
            divVs.classList.add("vs")

            spanModalidade = document.createElement("span")

            spanModalidade.classList.add("game--modalidade")

            spanModalidade.innerHTML = `${element.modalidade}`.toUpperCase()

            divVs.appendChild(spanModalidade)

            divImagem = document.createElement("img")
            divImagem.setAttribute("src", "./imgs/versus.png");
            divImagem.setAttribute("alt", "Imagem de versus");

            divVs.appendChild(divImagem)

            dataJogo = element.data_do_jogo
            dataJogo = dataJogo.split(" ");

            horasEMinuto = dataJogo[1].split(":")

            spanHora = document.createElement("span")

            spanHora.classList.add("game--time")

            spanHora.innerHTML = `${horasEMinuto[0]}:${horasEMinuto[1]}`

            divVs.appendChild(spanHora)

            divCard.appendChild(divVs)

            lado2 = document.createElement("div")
            lado2.classList.add("lado2")
            p2 = document.createElement("p")
            p2.classList.add("title--team")
            p2.innerHTML = `${element.time2_nome}`
            lado2.appendChild(p2)
            divCard.appendChild(lado2)

            divCarrouselItem.appendChild(divCard)
            carrouselInner[0].append(divCarrouselItem)
            
            quantidade++
        } else {
            //coloca no ultimo carrousel item
            divCard = document.createElement("div")
            divCard.classList.add("card-jogo");

            lado1 = document.createElement("div")
            lado1.classList.add("lado1")

            p1 = document.createElement("p")
            p1.classList.add("title--team")
            p1.innerHTML = `${element.time1_nome}`

            lado1.appendChild(p1)

            divCard.appendChild(lado1)


            divVs = document.createElement("div")
            divVs.classList.add("vs")

            spanModalidade = document.createElement("span")

            spanModalidade.classList.add("game--modalidade")

            spanModalidade.innerHTML = `${element.modalidade}`.toUpperCase()

            divVs.appendChild(spanModalidade)

            divImagem = document.createElement("img")
            divImagem.setAttribute("src", "./imgs/versus.png");
            divImagem.setAttribute("alt", "Imagem de versus");

            divVs.appendChild(divImagem)

            dataJogo = element.data_do_jogo
            dataJogo = dataJogo.split(" ");

            horasEMinuto = dataJogo[1].split(":")

            spanHora = document.createElement("span")

            spanHora.classList.add("game--time")

            spanHora.innerHTML = `${horasEMinuto[0]}:${horasEMinuto[1]}`

            divVs.appendChild(spanHora)

            divCard.appendChild(divVs)

            lado2 = document.createElement("div")
            lado2.classList.add("lado2")
            p2 = document.createElement("p")
            p2.classList.add("title--team")
            p2.innerHTML = `${element.time2_nome}`
            lado2.appendChild(p2)
            divCard.appendChild(lado2)

            lastCarrouselitem.append(divCard)
            quantidade++
        }


    });

}

function getDay() {
    h6 = document.getElementById('dia-atual')
    let data = new Date()
    let ano = data.getFullYear()
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let dia = String(data.getDate()).padStart(2, '0');
    h6.innerHTML = `${dia} / ${mes} / ${ano}`
}

getDay()
getJogos()

