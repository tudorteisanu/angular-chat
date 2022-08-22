import { Component } from '@angular/core';
import { RoomsService } from 'src/app/store/rooms.service';
import { CreateRoomInterface } from 'src//ts/interfaces';
import { PageRoutes } from '@/ts/enum';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '@services/error-handler.service';

@Component({
  selector: 'app-rooms-create',
  templateUrl: './rooms-create.component.html',
})
export class RoomsCreateComponent {
  form: CreateRoomInterface = {
    name: '',
  };
  errors: Record<string, string[]> | undefined;

  constructor(
    private roomsService: RoomsService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {}

  get errorMessage(): string {
    return this.errors?.['name']?.join(', ') || '';
  }

  createChat(): void {
    this.roomsService.createRoom(this.form).subscribe({
      next: () => this.router.navigateByUrl(PageRoutes.Rooms),
      error: (error: any) => {
        if (error.hasOwnProperty('errors')) {
          this.errors = error.errors;
        } else {
          this.errorHandler.handleError(error.errors);
        }
      },
    });
  }
}
