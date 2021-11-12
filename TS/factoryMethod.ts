// Facilitates the creation of other objects.
namespace FactoryMethodPattern {
	export interface AbstractProduct {
		method(param?: any): void
	}

	export class ConcreteProductA implements AbstractProduct {
		method = (param?: any) => {
			return 'Method of ConcreteProductA'
		}
	}

	export class ConcreteProductB implements AbstractProduct {
		method = (param?: any) => {
			return 'Method of ConcreteProductB'
		}
	}

	export namespace ProductFactory {
		export function createProduct(type: string): AbstractProduct {
			if (type === 'A') {
				return new ConcreteProductA()
			} else if (type === 'B') {
				return new ConcreteProductB()
			}

			return null
		}
	}
}

//

export function show(): void {
	var a: FactoryMethodPattern.AbstractProduct =
		FactoryMethodPattern.ProductFactory.createProduct('A')
	var b: FactoryMethodPattern.AbstractProduct =
		FactoryMethodPattern.ProductFactory.createProduct('B')

	console.log(a.method())
	console.log(b.method())
}
