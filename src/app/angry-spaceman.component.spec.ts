import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngrySpacemanAppComponent } from '../app/angry-spaceman.component';

beforeEachProviders(() => [AngrySpacemanAppComponent]);

describe('App: AngrySpaceman', () => {
  it('should create the app',
      inject([AngrySpacemanAppComponent], (app: AngrySpacemanAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angry-spaceman works!\'',
      inject([AngrySpacemanAppComponent], (app: AngrySpacemanAppComponent) => {
    expect(app.title).toEqual('angry-spaceman works!');
  }));
});
