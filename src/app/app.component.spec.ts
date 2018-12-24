import { AppSettings } from './core/model/app-settings';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppSettingsService } from './core/services/index';
import { AppComponent } from './app.component';
import {of} from 'rxjs';



describe('AppComponent', () => {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
      const appSettingsServiceStub = <AppSettingsService>{
        getSettings: function () {
          return of<AppSettings>(
            {
              application: 'app',
              version: '-1.0'
            });
        }
      };
        TestBed.configureTestingModule({
            declarations: [ AppComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: AppSettingsService, useValue: appSettingsServiceStub }
            ]
        });
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const appSettingsServiceStub: AppSettingsService = fixture.debugElement.injector.get(AppSettingsService);
            spyOn(appSettingsServiceStub, 'getSettings').and.returnValue({ subscribe: () => {} });
            comp.ngOnInit();
            expect(appSettingsServiceStub.getSettings).toHaveBeenCalled();
        });
    });

});
