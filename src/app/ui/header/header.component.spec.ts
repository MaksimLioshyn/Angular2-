import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/index';
import { CartService } from '../../cart/cart.services';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let comp: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
        const routerStub = {
            navigate: () => ({})
        };
        const userServiceStub = {
            isAuthenticated: () => ({}),
            isAdmin: () => ({}),
            getUsername: () => ({}),
            logout: () => ({
                then: () => ({
                    catch: () => ({})
                })
            })
        };
        const cartServiceStub = {
            size: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ HeaderComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: Router, useValue: routerStub },
                { provide: UserService, useValue: userServiceStub },
                { provide: CartService, useValue: cartServiceStub }
            ]
        });
        fixture = TestBed.createComponent(HeaderComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('cartSize', () => {
        it('makes expected calls', () => {
            const cartServiceStub: CartService = fixture.debugElement.injector.get(CartService);
            spyOn(cartServiceStub, 'size');
            comp.cartSize();
            expect(cartServiceStub.size).toHaveBeenCalled();
        });
    });

    describe('isAuthenticated', () => {
        it('makes expected calls', () => {
            const userServiceStub: UserService = fixture.debugElement.injector.get(UserService);
            spyOn(userServiceStub, 'isAuthenticated');
            comp.isAuthenticated();
            expect(userServiceStub.isAuthenticated).toHaveBeenCalled();
        });
    });

    describe('isAdmin', () => {
        it('makes expected calls', () => {
            const userServiceStub: UserService = fixture.debugElement.injector.get(UserService);
            spyOn(userServiceStub, 'isAdmin');
            comp.isAdmin();
            expect(userServiceStub.isAdmin).toHaveBeenCalled();
        });
    });

    describe('getUsername', () => {
        it('makes expected calls', () => {
            const userServiceStub: UserService = fixture.debugElement.injector.get(UserService);
            spyOn(userServiceStub, 'getUsername');
            comp.getUsername();
            expect(userServiceStub.getUsername).toHaveBeenCalled();
        });
    });

});
