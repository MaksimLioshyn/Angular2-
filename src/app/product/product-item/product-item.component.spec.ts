import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GeneratorService } from '../../core/services/generator.service';
import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
    let comp: ProductItemComponent;
    let fixture: ComponentFixture<ProductItemComponent>;

    beforeEach(() => {
        const generatorServiceStub = {
            generate: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ ProductItemComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: GeneratorService, useValue: generatorServiceStub }
            ]
        });
        fixture = TestBed.createComponent(ProductItemComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const generatorServiceStub: GeneratorService = fixture.debugElement.injector.get(GeneratorService);
            spyOn(generatorServiceStub, 'generate');
            comp.ngOnInit();
            expect(generatorServiceStub.generate).toHaveBeenCalled();
        });
    });

});
