import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-cadastro',
  standalone: true, // Define o componente como standalone
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [FormsModule, CommonModule] // Adiciona CommonModule aqui
})
export class CadastroComponent {
  cadastro = {
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
    gender: ''
  };

  showModal: boolean = false; // Controle de exibição do modal
  modalMessage: string = ''; // Mensagem do modal

  onSubmit(form: any) {
    if (form.valid) {
      this.modalMessage = 'Cadastro realizado com sucesso!';
      console.log('Cadastro:', this.cadastro);
    } else {
      this.modalMessage = 'Erro: Por favor, verifique os dados do formulário.';
      console.log('Formulário inválido');
    }
    this.showModal = true; // Exibe o modal
  }

  closeModal() {
    this.showModal = false; // Fecha o modal
  }
}
