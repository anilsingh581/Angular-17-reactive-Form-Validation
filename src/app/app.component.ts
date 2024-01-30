import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Form Validation';

    form = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      acceptTerms: false,
    };

    onSubmit(): void {
      console.log(JSON.stringify(this.form));
    }

    onReset(form: NgForm): void {
        form.resetForm();
    } 
  
}
