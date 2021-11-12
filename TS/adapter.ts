// Convert the interface of class into another interface clients expect. Adapter lets class work together that couldn't otherwise because of incompatible interfaces.

namespace AdapterPattern {
	export class Adaptee {
		public method(): void {
			console.log('`method` of Adaptee is being called')
		}
	}

	export interface Target {
		call(): void
	}

	export class Adapter implements Target {
		public call(): void {
			console.log("Adapter's `call` method is being called")
			var adaptee: Adaptee = new Adaptee()
			adaptee.method()
		}
	}
}
//
export function show(): void {
	var adapter: AdapterPattern.Adapter = new AdapterPattern.Adapter()
	adapter.call()
}
