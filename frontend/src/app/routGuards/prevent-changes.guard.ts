import { CanDeactivateFn } from '@angular/router';
import { ProfileComponent } from '../members/profile/profile.component';


export const preventChangesGuard: CanDeactivateFn<ProfileComponent> = (component: ProfileComponent) => {
  if(component.editForm?.dirty) {
    return confirm('Are you sure you want to contine? Any unsaved changes will be lost!');
  }
  return true;
};



