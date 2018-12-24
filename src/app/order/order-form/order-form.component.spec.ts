import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { OrderFormComponent } from './order-form.component';

describe('OrderFormComponent', () => {
    let comp: OrderFormComponent;
    let fixture: ComponentFixture<OrderFormComponent>;

    beforeEach(() => {
        const abstractControlStub = {
            touched: {},
            dirty: {},
            errors: {}
        };
        const formBuilderStub = {
            group: () => ({}),
            array: () => ({}),
            control: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ OrderFormComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: AbstractControl, useValue: abstractControlStub },
                { provide: FormBuilder, useValue: formBuilderStub }
            ]
        });
        fixture = TestBed.createComponent(OrderFormComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
