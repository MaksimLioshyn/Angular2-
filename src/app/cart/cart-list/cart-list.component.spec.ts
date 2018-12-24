import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {Store} from '@ngrx/store';

import { CartListComponent } from './cart-list.component';
import {CartService} from '../cart.services';
import {SortItemPipe} from '../../shared/pipes/sort-item.pipe';
import {Cart} from '../models/cart.model';


describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;
  let cartService: CartService;
  let storeSpy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CartListComponent, SortItemPipe],
      providers: [
        CartService,
        {provide: Store, useValue: jasmine.createSpyObj('store', ['dispatch'])}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    cartService = fixture.debugElement.injector.get(CartService);
    storeSpy = fixture.debugElement.injector.get(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display empty cart', () => {
    spyOn(cartService, 'getAll').and.returnValue([]);
    component.ngOnInit();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('[header-text]')).nativeElement.textContent).toEqual('Products cart is empty');
  });

  it('should display items in the cart', () => {
    spyOn(cartService, 'getAll').and.returnValue([new Cart(1, '1', 1, 1), new Cart(2, '2', 2, 2)]);
    spyOn(cartService, 'isEmpty').and.returnValue(false);
    component.ngOnInit();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('[header-text]')).nativeElement.textContent).toEqual('Items in the cart:');
    expect(fixture.debugElement.queryAll(By.css('cart-item')).length).toEqual(2);
  });

  it('should redirect to order page', () => {
    spyOn(cartService, 'getAll').and.returnValue([new Cart(1, '1', 1, 1), new Cart(2, '2', 2, 2)]);
    spyOn(cartService, 'isEmpty').and.returnValue(false);
    component.ngOnInit();
    fixture.detectChanges();

    const goToOrderButton = <HTMLButtonElement>fixture.debugElement.query(By.css('#goToOrder')).nativeElement;
    goToOrderButton.click();

    expect(storeSpy.dispatch.calls.count()).toEqual(1);
    expect(storeSpy.dispatch.calls.mostRecent().args[0].payload.path).toEqual(['/order']);
  });

});
