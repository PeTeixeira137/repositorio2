"use strict";
class Tarefa {
    titulo;
    descricao;
    concluida;
    dataCriacao;
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
        this.dataCriacao = new Date();
    }
    renderizar() {
        const item = document.createElement('li');
        item.className = 'tarefa-card';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = this.concluida;
        const titulo = document.createElement('p');
        titulo.className = 'tarefa-titulo';
        titulo.textContent = this.titulo;
        const descricao = document.createElement('p');
        descricao.className = 'tarefa-descricao';
        descricao.textContent = this.descricao;
        const data = document.createElement('p');
        data.className = 'tarefa-data';
        data.textContent = `Criada em: ${this.dataCriacao.toLocaleString('pt-BR')}`;
        const info = document.createElement('div');
        info.className = 'tarefa-info';
        info.appendChild(titulo);
        info.appendChild(descricao);
        info.appendChild(data);
        checkbox.addEventListener('change', () => {
            this.concluida = checkbox.checked;
            item.classList.toggle('concluida', this.concluida);
        });
        item.appendChild(checkbox);
        item.appendChild(info);
        return item;
    }
}
class App {
    tarefas;
    listaTarefas;
    formulario;
    inputTitulo;
    inputDescricao;
    constructor() {
        this.tarefas = [];
        this.listaTarefas = document.getElementById('lista-tarefas');
        this.formulario = document.getElementById('form-tarefa');
        this.inputTitulo = document.getElementById('input-titulo');
        this.inputDescricao = document.getElementById('input-descricao');
        this.formulario.addEventListener('submit', (event) => {
            this.adicionarTarefa(event);
        });
    }
    adicionarTarefa(event) {
        event.preventDefault();
        const titulo = this.inputTitulo.value.trim();
        const descricao = this.inputDescricao.value.trim();
        if (titulo === '') {
            return;
        }
        const novaTarefa = new Tarefa(titulo, descricao);
        this.tarefas.push(novaTarefa);
        const tarefa = novaTarefa.renderizar();
        this.listaTarefas.appendChild(tarefa);
        this.inputTitulo.value = '';
        this.inputDescricao.value = '';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
