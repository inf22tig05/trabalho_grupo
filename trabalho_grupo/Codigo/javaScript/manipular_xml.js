// <!DOCTYPE html>
// <html>
// <head>
//     <title>Exemplo de ligação XML-HTML</title>
//     <script src="caminho_para_o_arquivo_xml.js"></script>
//     <script>
//         // Função para carregar e manipular o XML
//         function carregarXML() {
//             var xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function() {
//                 if (this.readyState == 4 && this.status == 200) {
//                     manipularXML(this);
//                 }
//             };
//             xhttp.open("GET", "caminho_para_o_arquivo_xml.xml", true);
//             xhttp.send();
//         }

//         // Função para manipular os dados do XML
//         function manipularXML(xml) {
//             var xmlDoc = xml.responseXML;
//             var especies = xmlDoc.getElementsByTagName("espécie");

//             // Loop para percorrer as espécies do XML
//             for (var i = 0; i < especies.length; i++) {
//                 var nome = especies[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
//                 var descricao = especies[i].getElementsByTagName("descrição")[0].childNodes[0].nodeValue;

//                 // Criação dos elementos HTML para exibir as informações
//                 var divEspecie = document.createElement("div");
//                 var h4Nome = document.createElement("h4");
//                 var pDescricao = document.createElement("p");

//                 // Atribuição dos valores dos elementos HTML
//                 h4Nome.innerHTML = nome;
//                 pDescricao.innerHTML = descricao;

//                 // Anexa os elementos à div de espécies
//                 divEspecie.appendChild(h4Nome);
//                 divEspecie.appendChild(pDescricao);

//                 // Anexa a div de espécies ao elemento HTML pai (por exemplo, uma div com id "lista")
//                 document.getElementById("lista").appendChild(divEspecie);
//             }
//         }
//     </script>
// </head>
// <body onload="carregarXML()">
//     <div id="lista">
//         <!-- Os elementos HTML das espécies serão adicionados aqui -->
//     </div>
// </body>
// </html>
