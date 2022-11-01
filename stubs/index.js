
// Caso API fique OFFLINE e seja necessário continuar os teste utilizar STUBS
// Objetivo sempre retorna valores pré determinados

const sinon = require('sinon');
const axios = require('axios');

const mock = require('./mocks/queryCep.json');
const URL_PADRAO = `https://viacep.com.br/ws/84010-220/json/`;

(async () => {
    console.log("START - Learning STUBS");

    {
        /* Com conexão a API
        const resp = await axios.get(URL_PADRAO);
        console.log(resp.data);
        */
    }

    {
        const stub = await sinon.stub(axios, 'get');
        stub.withArgs(URL_PADRAO).resolves(mock)

        // A resposta da requisição retorna o mock
        const test = await axios.get(URL_PADRAO);
        console.log("test", test);
     
    }

})()