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
    tarefas: tarefa[];
    listaTarefas: HTMLElement;
    formulario: HTMLFormElement;
    inputTitulo: HTMLInputElement;
    inputDescricao: HTMLInputElement;

    constructor() {
        this.tarefas = [];
        this.listaTarefas = document.getElementById('lista-tarefas') as HTMLElement;
        this.formulario = document.getElementById('formulario-tarefa') as HTMLFormElement;
        this.inputTitulo = document.getElementById('titulo') as HTMLInputElement;
        this.inputDescricao = document.getElementById('descricao') as HTMLTextAreaElement;

        this.formulario.addEventListener('submit', (event) => {
            this.adicionarTarefa(event);
        });
    }

    adicionarTarefa(event: Event): void {
        event.preventDefault();
        const titulo = this.inputTitulo.value.trim();
        const descricao = this.inputDescricao.value.trim();
        if (titulo === ''){
            return;
        }
        const novaTarefa = new tarefa(titulo, descricao);
        this.tarefas.push(novaTarefa);
        this.renderizarTarefas();
        this.formulario.reset();
    }

    const novaTarefa = new tarefa(titulo, descricao);
    this.tarefas.push(novaTarefa);
    const tarefa = novaTarefa.renderizar();
    
}