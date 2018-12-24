import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CartService } from '../cart.services';
import { ConfigOptionsService } from '../../core/services/config-options.service';
import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
    let comp: CartItemComponent;
    let fixture: ComponentFixture<CartItemComponent>;

    beforeEach(() => {
        const cartServiceStub = {
            remove: () => ({})
        };
        const configOptionsServiceStub = {
            localStorageService: {
                getItem: () => ({})
            }
        };
        TestBed.configureTestingModule({
            declarations: [ CartItemComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: CartService, useValue: cartServiceStub },
                { provide: ConfigOptionsService, useValue: configOptionsServiceStub }
            ]
        });
        fixture = TestBed.createComponent(CartItemComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('onRemove', () => {
        it('makes expected calls', () => {
            const cartServiceStub: CartService = fixture.debugElement.injector.get(CartService);
            spyOn(cartServiceStub, 'remove');
            comp.onRemove();
            expect(cartServiceStub.remove).toHaveBeenCalled();
        });
    });

});
