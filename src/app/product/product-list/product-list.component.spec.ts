import { SortItemPipe } from './../../shared/pipes/sort-item.pipe';
import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { CartService } from '../../cart/cart.services';
import { Store } from '@ngrx/store';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
    let comp: ProductListComponent;
    let fixture: ComponentFixture<ProductListComponent>;

    beforeEach(() => {
        const activatedRouteStub = {};
        const productStub = {
          id: 2,
          name: 'Test product name',
          description: 'Test product description',
          price: 2500,
          isAvailable: true,
          stores: []
        };
        const cartServiceStub = {
            addProduct: () => ({})
        };
        const storeStub = {
            dispatch: () => ({}),
            pipe: () => ({})
        };

        TestBed.configureTestingModule({
            declarations: [ ProductListComponent, SortItemPipe ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteStub },
                { provide: Product, useValue: productStub },
                { provide: CartService, useValue: cartServiceStub },
                { provide: Store, useValue: storeStub }
            ]
        });
        fixture = TestBed.createComponent(ProductListComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('onAddToCart', () => {
        it('makes expected calls', () => {
          const productStub = {
            id: 2,
            name: 'Test product name',
            description: 'Test product description',
            price: 2500,
            isAvailable: true,
            stores: []
          };
            const cartServiceStub: CartService = fixture.debugElement.injector.get(CartService);
            spyOn(cartServiceStub, 'addProduct');
            comp.onAddToCart(productStub);
            expect(cartServiceStub.addProduct).toHaveBeenCalled();
        });
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const storeStub: Store<any> = fixture.debugElement.injector.get(Store);
            spyOn(storeStub, 'dispatch');
            spyOn(storeStub, 'pipe');
            comp.ngOnInit();
            expect(storeStub.dispatch).toHaveBeenCalled();
            expect(storeStub.pipe).toHaveBeenCalled();
        });
    });

});
