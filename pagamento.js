/* =========================================
   PAGAMENTO - NOSSA VITRINE
========================================= */

const opcoesPagamento = document.querySelectorAll(
    'input[name="pagamento"]'
);

const dadosPagamento = document.getElementById(
    "dadosPagamento"
);

const mensagem = document.getElementById(
    "mensagem"
);

const botaoContinuar = document.getElementById(
    "botaoContinuar"
);


/* =========================================
   ALTERAR FORMA DE PAGAMENTO
========================================= */

opcoesPagamento.forEach((opcao) => {

    opcao.addEventListener("change", function () {

        mensagem.textContent = "";

        const pagamento = this.value;


        /* PIX */

        if (pagamento === "pix") {

            dadosPagamento.innerHTML = `

                <div class="pix-box">

                    <div class="pix-box-icon">
                        💠
                    </div>

                    <div>

                        <h3>
                            PIX selecionado
                        </h3>

                        <p>
                            Clique em continuar para
                            gerar o pagamento PIX.
                        </p>

                    </div>

                </div>

            `;

        }


        /* CARTÃO DE CRÉDITO */

        else if (pagamento === "credito") {

            dadosPagamento.innerHTML = `

                <div class="pix-box">

                    <div class="pix-box-icon">
                        💳
                    </div>

                    <div>

                        <h3>
                            Cartão de crédito
                        </h3>

                        <p>
                            Você será direcionado para
                            o ambiente seguro de pagamento.
                        </p>

                    </div>

                </div>

            `;

        }


        /* CARTÃO DE DÉBITO */

        else if (pagamento === "debito") {

            dadosPagamento.innerHTML = `

                <div class="pix-box">

                    <div class="pix-box-icon">
                        💳
                    </div>

                    <div>

                        <h3>
                            Cartão de débito
                        </h3>

                        <p>
                            Você será direcionado para
                            o ambiente seguro de pagamento.
                        </p>

                    </div>

                </div>

            `;

        }


        /* BOLETO */

        else if (pagamento === "boleto") {

            dadosPagamento.innerHTML = `

                <div class="pix-box">

                    <div class="pix-box-icon">
                        🧾
                    </div>

                    <div>

                        <h3>
                            Boleto bancário
                        </h3>

                        <p>
                            Clique em continuar para
                            prosseguir com a geração do boleto.
                        </p>

                    </div>

                </div>

            `;

        }

    });

});


/* =========================================
   CONTINUAR
========================================= */

botaoContinuar.addEventListener(
    "click",
    function () {

        const selecionado = document.querySelector(
            'input[name="pagamento"]:checked'
        );


        /* NENHUMA OPÇÃO */

        if (!selecionado) {

            mensagem.textContent =
                "⚠️ Escolha uma forma de pagamento.";

            mensagem.style.color = "#dc3545";

            return;
        }


        /* PIX */

        if (selecionado.value === "pix") {

            mensagem.textContent =
                "💠 PIX selecionado. O próximo passo será gerar o QR Code.";

            mensagem.style.color = "#008f5a";

            return;
        }


        /* CRÉDITO */

        if (selecionado.value === "credito") {

            mensagem.textContent =
                "💳 Cartão de crédito selecionado. O próximo passo será abrir o checkout seguro.";

            mensagem.style.color = "#008f5a";

            return;
        }


        /* DÉBITO */

        if (selecionado.value === "debito") {

            mensagem.textContent =
                "💳 Cartão de débito selecionado. O próximo passo será abrir o checkout seguro.";

            mensagem.style.color = "#008f5a";

            return;
        }


        /* BOLETO */

        if (selecionado.value === "boleto") {

            mensagem.textContent =
                "🧾 Boleto selecionado. O próximo passo será gerar o boleto.";

            mensagem.style.color = "#008f5a";

            return;
        }

    }
);