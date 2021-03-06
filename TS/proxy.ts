// Provide a surrogate or placeholder for another object to control access to it.
namespace ProxyPattern {
	interface Subject {
		doAction(): void
	}

	export class Proxy implements Subject {
		private realSubject: RealSubject
		private s: string

		constructor(s: string) {
			this.s = s
		}

		public doAction(): void {
			console.log('`doAction` of Proxy(', this.s, ')')
			if (this.realSubject === null || this.realSubject === undefined) {
				console.log('creating a new RealSubject.')
				this.realSubject = new RealSubject(this.s)
			}
			this.realSubject.doAction()
		}
	}

	class RealSubject implements Subject {
		private s: string

		constructor(s: string) {
			this.s = s
		}
		public doAction(): void {
			console.log('`doAction` of RealSubject', this.s, 'is being called!')
		}
	}
}
export function show(): void {
	var proxy1: ProxyPattern.Proxy = new ProxyPattern.Proxy('proxy1'),
		proxy2: ProxyPattern.Proxy = new ProxyPattern.Proxy('proxy2')

	proxy1.doAction()
	proxy1.doAction()
	proxy2.doAction()
	proxy2.doAction()
	proxy1.doAction()
}
