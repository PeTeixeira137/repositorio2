class tarefa {
    titulo: string;
    descricao: string;
    concluida: boolean;
    dataCriacao: Date;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
        this.dataCriacao = new Date();
    }

    renderizar(): HTMLElement {
        const li = document.createElement('li');
        li.className = 'tarefa-card';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = this.concluida;

        const titulo = document.createElement('p');
        titulo.className = 'tarefa-titulo';
        titulo.textContent = this.titulo;

        const descricao = document.createElement('p');
        descricao.className = 'tarefa-descricao';
        descricao.textContent = this.descricao;

        const dataCriacao = document.createElement('p');
        dataCriacao.className = 'tarefa-data';
        dataCriacao.textContent = `Criada em: ${this.dataCriacao.toLocaleString('pt-BR')}`;
    }
}