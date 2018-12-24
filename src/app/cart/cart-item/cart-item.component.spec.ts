import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CartItemComponent} from './cart-item.component';
import {GeneratorService} from '../../core/services/generator.service';
import {Cart} from '../models/cart.model';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CartService} from '../cart.services';

const generatorServiceStub = <GeneratorService>{
  generate: function () {
    return 'hash_value';
  }
};

describe('CartComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let cartService: CartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CartItemComponent],
      providers: [
        CartService,
        {provide: GeneratorService, useValue: generatorServiceStub}
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    cartService = fixture.debugElement.injector.get(CartService);

    component.item = new Cart(1, 'item_name', 2.2, 3);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display item content', async(() => {
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('.item')).nativeElement.textContent).toEqual('name: item_name price: 2.2 quantity: ');
      expect(fixture.debugElement.query(By.css('.item input')).nativeElement.value).toEqual('3');
    });
  }));

  it('should display hash', async(() => {
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('.hash')).nativeElement.textContent).toEqual('hash: hash_value');
    });
  }));

  it('should update item quantity', async(() => {
    const quantityInput = fixture.debugElement.query(By.css('.item input')).nativeElement as HTMLInputElement;
    quantityInput.value = '5';
    quantityInput.dispatchEvent(new Event('input'));

    fixture.whenStable().then(() => {
      expect(component.item.quantity === 5).toBeTruthy();
    });
  }));

  it('should remove item', async(() => {
    const cartServiceSpy = spyOn(cartService, 'remove')
        .and.returnValue(true);

        const removeButton = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    removeButton.click();

    fixture.whenStable().then(() => {
      expect(cartServiceSpy).toHaveBeenCalled();
    });
  }));

});
