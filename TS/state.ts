// A cleaner way for an object to change its behavior at runtime without resorting to large monolithic conditional statements.
namespace StatePattern {
	export interface State {
		handle(context: Context): void
	}

	export class ConcreteStateA implements State {
		public handle(context: Context): void {
			console.log('`handle` method of ConcreteStateA is being called!')
			context.State = new ConcreteStateB()
		}
	}

	export class ConcreteStateB implements State {
		public handle(context: Context): void {
			console.log('`handle` method of ConcreteStateB is being called!')
			context.State = new ConcreteStateA()
		}
	}

	export class Context {
		private state: State

		constructor(state: State) {
			this.state = state
		}

		get State(): State {
			return this.state
		}

		set State(state: State) {
			this.state = state
		}

		public request(): void {
			console.log('request is being called!')
			this.state.handle(this)
		}
	}
}

//
export function show(): void {
	var context: StatePattern.Context = new StatePattern.Context(new StatePattern.ConcreteStateA())
	context.request()
	context.request()
	context.request()
	context.request()
	context.request()
	context.request()
	context.request()
	context.request()
}
