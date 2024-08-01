import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-cadastro',
  standalone: true, // Define o componente como standalone
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [FormsModule] // Importa FormsModule para o componente standalone
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

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Cadastro:', this.cadastro);
    } else {
      console.log('Formulário inválido');
    }
  }
}
