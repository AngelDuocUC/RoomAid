import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.page.html',
  styleUrls: ['./qr-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class QrPagePage implements OnInit {

  constructor(private alertController: AlertController) { } // Inyecta AlertController

  ngOnInit() {
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Seguro que quieres darle acceso a la App "Roomaid" a tu cámara?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Manejar la acción de cancelar aquí
          },
        },
        {
          text: 'OK',
          handler: () => {
            // Manejar la acción OK aquí
          },
        },
      ],
    });

    await alert.present();
  }
}
