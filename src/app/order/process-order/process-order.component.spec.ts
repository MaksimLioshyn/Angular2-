import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ProcessOrderComponent } from './process-order.component';

describe('ProcessOrderComponent', () => {
    let comp: ProcessOrderComponent;
    let fixture: ComponentFixture<ProcessOrderComponent>;

    beforeEach(() => {
        const formBuilderStub = {
            group: () => ({}),
            array: () => ({}),
            control: () => ({})
        };
        const abstractControlStub = {
            touched: {},
            dirty: {},
            errors: {},
            phone: {
                errors: {}
            }
        };
        TestBed.configureTestingModule({
            declarations: [ ProcessOrderComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: FormBuilder, useValue: formBuilderStub },
                { provide: AbstractControl, useValue: abstractControlStub }
            ]
        });
        fixture = TestBed.createComponent(ProcessOrderComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
