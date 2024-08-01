import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component'; // Importa o componente de cadastro

@Component({
  selector: 'app-root',
  standalone: true, // Define o componente raiz como standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, CadastroComponent] // Importa componentes necessários
})
export class AppComponent {
  title = 'formulario-angular';
}
