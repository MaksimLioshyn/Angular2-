import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductViewComponent } from './product-view.component';

describe('ProductViewComponent', () => {
    let comp: ProductViewComponent;
    let fixture: ComponentFixture<ProductViewComponent>;

    beforeEach(() => {
        const activatedRouteStub = {};
        const storeStub = {
            pipe: () => ({}),
            dispatch: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ ProductViewComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteStub },
                { provide: Store, useValue: storeStub }
            ]
        });
        fixture = TestBed.createComponent(ProductViewComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const storeStub: Store<any> = fixture.debugElement.injector.get(Store);
            spyOn(storeStub, 'pipe');
            comp.ngOnInit();
            expect(storeStub.pipe).toHaveBeenCalled();
        });
    });

    describe('onClose', () => {
        it('makes expected calls', () => {
            const storeStub: Store<any> = fixture.debugElement.injector.get(Store);
            spyOn(storeStub, 'dispatch');
            comp.onClose();
            expect(storeStub.dispatch).toHaveBeenCalled();
        });
    });

});
