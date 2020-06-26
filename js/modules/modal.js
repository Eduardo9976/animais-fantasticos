export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    //bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModel = this.eventToggleModel.bind(this); // fazendo referencia tbm
    this.cliqueForaModal = this.cliqueForaModal.bind(this); //estao fazendo referencia para o this na hora de chamar o evento
  }

  //abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  //previne o padrão e chama a função abre e fecha do modal
  eventToggleModel(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //verifica se o click foi fora do modal
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  //adiciona os eventos ao modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModel);
    this.botaoFechar.addEventListener('click', this.eventToggleModel);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
      return this;
    }
  }
}
