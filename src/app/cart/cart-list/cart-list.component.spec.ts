import { SortItemPipe } from './../../shared/pipes/sort-item.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from '../cart.services';
import { CartListComponent } from './cart-list.component';

describe('CartListComponent', () => {
    let comp: CartListComponent;
    let fixture: ComponentFixture<CartListComponent>;

    beforeEach(() => {
        const storeStub = {
            dispatch: () => ({})
        };
        const cartServiceStub = {
            getAll: () => ({}),
            clear: () => ({}),
            isEmpty: () => ({}),
            getTotalPrice: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ CartListComponent, SortItemPipe ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: Store, useValue: storeStub },
                { provide: CartService, useValue: cartServiceStub }
            ]
        });
        fixture = TestBed.createComponent(CartListComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const cartServiceStub: CartService = fixture.debugElement.injector.get(CartService);
            spyOn(cartServiceStub, 'getAll');
            comp.ngOnInit();
            expect(cartServiceStub.getAll).toHaveBeenCalled();
        });
    });

    describe('onClear', () => {
        it('makes expected calls', () => {
            const cartServiceStub: CartService = fixture.debugElement.injector.get(CartService);
            spyOn(cartServiceStub, 'clear');
            comp.onClear();
            expect(cartServiceStub.clear).toHaveBeenCalled();
        });
    });

    describe('isEmpty', () => {
        it('makes expected calls', () => {
            const cartServiceStub: CartService = fixture.debugElement.injector.get(CartService);
            spyOn(cartServiceStub, 'isEmpty');
            comp.isEmpty();
            expect(cartServiceStub.isEmpty).toHaveBeenCalled();
        });
    });

    describe('getTotalPrice', () => {
        it('makes expected calls', () => {
            const cartServiceStub: CartService = fixture.debugElement.injector.get(CartService);
            spyOn(cartServiceStub, 'getTotalPrice');
            comp.getTotalPrice();
            expect(cartServiceStub.getTotalPrice).toHaveBeenCalled();
        });
    });

    describe('orderForm', () => {
        it('makes expected calls', () => {
            const storeStub: Store<any> = fixture.debugElement.injector.get(Store);
            spyOn(storeStub, 'dispatch');
            comp.orderForm();
            expect(storeStub.dispatch).toHaveBeenCalled();
        });
    });

    describe('orderProcess', () => {
        it('makes expected calls', () => {
            const storeStub: Store<any> = fixture.debugElement.injector.get(Store);
            spyOn(storeStub, 'dispatch');
            comp.orderProcess();
            expect(storeStub.dispatch).toHaveBeenCalled();
        });
    });

});
