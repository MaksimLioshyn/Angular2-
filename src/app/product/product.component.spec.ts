import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
    let comp: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(() => {
        const routerStub = {};
        TestBed.configureTestingModule({
            declarations: [ ProductComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: Router, useValue: routerStub }
            ]
        });
        fixture = TestBed.createComponent(ProductComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
