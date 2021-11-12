// A class of which only a single instance can exist.
namespace SingletonPattern {
	export class Singleton {
		private static singleton: Singleton
		private constructor() {}
		public static getInstance(): Singleton {
			if (!Singleton.singleton) {
				Singleton.singleton = new Singleton()
			}
			return Singleton.singleton
		}
	}
}

// ===============
export function test(): void {
	const singleton1 = SingletonPattern.Singleton.getInstance()
	const singleton2 = SingletonPattern.Singleton.getInstance()

	if (singleton1 === singleton2) {
		console.log('two singletons are equivalent')
	} else {
		console.log('two singletons are not equivalent')
	}
}
