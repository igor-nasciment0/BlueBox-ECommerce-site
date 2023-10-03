import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5033'
})

export async function buscarProduto(busca) {
    let produtos = await api.get('/produto?nome=' + busca);

    return produtos.data;
}

export async function cadastrarProduto(nomeProduto, preco, qtdEstoque, descricao, especificacoes, categoria, marca, usado, peso) {
    let cadastrarProduto = {
        nome: nomeProduto,
        preco: preco,
        estoque: qtdEstoque,
        descricao: descricao,
        especificacoes: especificacoes,
        categoria: categoria,
        marca: marca,
        usado: usado,
        peso: peso
    }

    let resp = await api.post('/produto', cadastrarProduto) 
    
    return resp;
}

export async function atualizarProduto(id, nomeProduto, preco, qtdEstoque, descricao, especificacoes, categoria, marca, usado, peso) {
    let infoProduto = {
        nome: nomeProduto,
        preco: preco,
        estoque: qtdEstoque,
        descricao: descricao,
        especificacoes: especificacoes,
        categoria: categoria,
        marca: marca,
        usado: usado,
        peso: peso
    }

    let resp = await api.put('/produto/' + id, infoProduto);

    return resp;
}

export async function deletarProduto(id) {
    let resp = await api.delete('/produto/' + id)

    return resp;
}

export async function buscarMarcas() {
    let marcas = await api.get('/produto/marca');
    
    return marcas.data;
}

export async function buscarCategorias() {
    let categorias = await api.get('/produto/categoria');
    
    return categorias.data;
}