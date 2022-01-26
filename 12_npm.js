// Duas maneiras de se instalar um pacote:
    //  como uma dependência local, num projeto particular: npm i <packageName> 
    //  como uma dependência global: npm install -g <packageName>

// Criar o arquivo "package.json" -> um arquivo de manifesto, que tem informações do projeto
    // manual (criar "package.json" no root do projeto, criar propriedades etc)
    // npm init (passo a passo, aperte ENTER para passar)
    // npm init -y (everything default)

// Depois de instalar o pacote "lodash", no package.json foi adicionado uma dependência, o lodash.
// O próprio npm cria o arquivo "node_modules", e é lá que estão as dependências do projeto.
// dependendo do pacote que vc instalar, ele pode instalar mais do que um pacote

// "Comma convention" = quando estiver requirindo um app do npm, usar o sublinhado
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
