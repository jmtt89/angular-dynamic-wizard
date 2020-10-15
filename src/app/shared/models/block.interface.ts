import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export interface Block {
  form: FormGroup;

  initialize(data: any): void;
  validate(): Observable<boolean>;
  finalize(): void;
}
