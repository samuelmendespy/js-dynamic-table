// Dados carregados para uso em todas as funções
const personsData = [
  {
    ID: "1",
    Nome: "Luiz Roberto",
    Idade: 33,
    Documentos: [
      {
        Tipo: "CNH",
        Numero: "48848830020",
        Descricao: "Carteira de Motorista",
      },
      {
        Tipo: "RG",
        Numero: "5004002",
        Descricao: "Carteira de Identidade",
      },
      {
        Tipo: "CTPS",
        Numero: "4567898",
        Descricao: "Carteira de Trabalho",
      },
    ],
  },
  {
    ID: "2",
    Nome: "Raimundo Soares",
    Idade: 51,
    Documentos: [
      {
        Tipo: "CNH",
        Numero: "45963548565789",
        Descricao: "Carteira de Motorista",
      },
      {
        Tipo: "RG",
        Numero: "5200785",
        Descricao: "Carteira de Identidade",
      },
      {
        Tipo: "CTPS",
        Numero: "7891237",
        Descricao: "Carteira de Trabalho",
      },
    ],
  },
  {
    ID: "3",
    Nome: "Ana Tavares",
    Idade: 24,
    Documentos: [
      {
        Tipo: "CNH",
        Numero: "65236525662159",
        Descricao: "Carteira de Motorista",
      },
      {
        Tipo: "CPF",
        Numero: "41254125147",
        Descricao: "Cadastro de Pessoa Física",
      },
    ],
  },
  {
    ID: "4",
    Nome: "Janete Niebues",
    Idade: 28,
    Documentos: [
      {
        Tipo: "CPF",
        Numero: "65236525662",
        Descricao: "Cadastro de Pessoa Física",
      },
      {
        Tipo: "RG",
        Numero: "3300785",
        Descricao: "Carteira de Identidade",
      },
      {
        Tipo: "SUS",
        Numero: "784512",
        Descricao: "Sistema Único de Saúde",
      },
    ],
  },
  {
    ID: "5",
    Nome: "Paulo da Rosa",
    Idade: 74,
    Documentos: [
      {
        Tipo: "RG",
        Numero: "5200785",
        Descricao: "Carteira de Identidade",
      },
      {
        Tipo: "CPF",
        Numero: "45621581254 1",
        Descricao: "Cadastro de Pessoa Física",
      },
    ],
  },
  {
    ID: "6",
    Nome: "Wesley Soares",
    Idade: 60,
    Documentos: [
      {
        Tipo: "CNH",
        Numero: "91035698445963",
        Descricao: "Carteira de Motorista",
      },
      {
        Tipo: "RG",
        Numero: "7415595",
        Descricao: "Carteira de Identidade",
      },
      {
        Tipo: "CPF",
        Numero: "45618452136",
        Descricao: "Carteira de Pessoa Física",
      },
      {
        Tipo: "SUS",
        Numero: "2200789",
        Descricao: "Sistema Único de Saúde",
      },
    ],
  },
  {
    ID: "7",
    Nome: "Tamires Souza",
    Idade: 12,
    Documentos: [
      {
        Tipo: "RG",
        Numero: "7852123",
        Descricao: "Carteira de Identidade",
      },
    ],
  },
];

/**
 * Função 1: Para receber um ID de uma pessoa como parâmetro e listar a pessoa com o ID.
 * Retorna um array contendo apenas a pessoa com ID
 */
function listPersonById(personId) {
  const pessoaFiltrada = personsData.filter(
    (pessoa) => pessoa.ID === personId.toString()
  );

  if (pessoaFiltrada.length === 0) {
    console.log("Pessoa não encontrada.");
    return [];
  }

  const pessoa = pessoaFiltrada[0];

  console.log(`ID: ${pessoa.ID}`);
  console.log(`Nome: ${pessoa.Nome}`);
  console.log(`Idade: ${pessoa.Idade}`);
  console.log("\nDocumentos:");

  pessoa.Documentos.forEach((doc) => {
    console.log(`  - ${doc.Tipo}: ${doc.Numero} (${doc.Descricao})`);
  });

  return pessoaFiltrada;
}

/**
 * Função 2: Para listagem de pessoas em ordem crescente com o número de CPF.
 * Retorna um array com as pessoas que possuem CPF, ordenadas por idade crescente
 * Cada pessoa no resultado contém apenas o documento de CPF
 */
function listPersonsByCPFSortedByAge() {
  // Filtra pessoas com CPF
  const personsWithCPF = personsData.filter((person) => {
    return person.Documentos.some((doc) => doc.Tipo === "CPF");
  });

  // Ordena por idade
  const sortedPersons = [...personsWithCPF].sort((a, b) => a.Idade - b.Idade);

  // Exibe as pessoas ordenadas
  sortedPersons.forEach((person, index) => {
    const cpf = person.Documentos.find((doc) => doc.Tipo === "CPF");

    console.log(`\nPessoa ${index + 1}:`);
    console.log(`ID: ${person.ID}`);
    console.log(`Nome: ${person.Nome}`);
    console.log(`Idade: ${person.Idade}`);
    console.log(`CPF: ${cpf.Numero}`);
  });

  return sortedPersons;
}

/**
 * Função 3: Recebe uma idade como parâmetro para filtrar pessoas com idade superior.
 * Retorna um array contendo as pessoas com idade maior que 50
 */
function listPeopleAboveAge(age) {
  const filteredPersons = personsData.filter(
    (person) => person.Idade > parseInt(age)
  );

  filteredPersons.forEach((person, index) => {
    console.log(`Pessoa ${index + 1}:`);
    console.log(`ID: ${person.ID}`);
    console.log(`Nome: ${person.Nome}`);
    console.log(`Idade: ${person.Idade}`);

    console.log("Documentos:");
    person.Documentos.forEach((document) => {
      console.log(
        `  - ${document.Tipo}: ${document.Numero} (${document.Descricao || ""})`
      );
    });

    console.log("");
  });

  return filteredPersons;
}

/**
 * Função 4: Para listar pessoas sem CPF
 * Retorna um array contendo apenas as pessoas que não possuem documento do tipo CPF
 */
function listPersonsWithouthCPF() {
  const personsWithouthCPF = personsData.filter((person) => {
    return !person.Documentos.some((document) => document.Tipo === "CPF");
  });

  personsWithouthCPF.forEach((person, index) => {
    console.log(`Pessoa ${index + 1}:`);
    console.log(`ID: ${person.ID}`);
    console.log(`Nome: ${person.Nome}`);
    console.log(`Idade: ${person.Idade}`);
    console.log("Documentos:");
    person.Documentos.forEach((document) => {
      console.log(
        `  - ${document.Tipo}: ${document.Numero} (${document.Descricao || ""})`
      );
    });

    console.log(); // Linha em branco entre pessoas
  });

  return personsWithouthCPF;
}

/**
 * Função 5: Para listagem de tipos de documentos
 * Retorna um array contendo todos os tipos únicos de documentos encontrados
 */
function listDocumentTypes() {
  // Criar Set com tipos de documentos para não listar valores duplicados.
  const documentTypes = new Set();
  personsData.forEach((person) => {
    person.Documentos.forEach((document) => {
      documentTypes.add(document.Tipo);
    });
  });

  // Imprimir os elementos do Set
  console.log("\nTipos de documentos:");
  documentTypes.forEach((type) => {
    console.log(`- ${type}`);
  });

  return documentTypes;
}

console.log(`\n>> 1 - LISTAGEM DE PESSOA COM ID 2.`);
listPersonById(2);
console.log(
  "\n>> 2 - LISTAGEM DE PESSOAS EM ORDEM DE IDADE CRESCENTE COM O NÚMERO DO CPF."
);
listPersonsByCPFSortedByAge();
console.log(`\n>> 3 - LISTAGEM DE PESSOAS COM IDADE SUPERIOR A 50 ANOS.`);
listPeopleAboveAge(50);
console.log("\n>> 4 - LISTAGEM DE PESSOAS QUE NÃO POSSUEM CPF.");
listPersonsWithouthCPF();
console.log("\n>> 5 - LISTAGEM DE TIPOS DE DOCUMENTOS.");
listDocumentTypes();
