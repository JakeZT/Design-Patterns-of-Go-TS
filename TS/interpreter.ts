// Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

namespace InterpreterPattern {
	export class Context {}

	export interface AbstractExpression {
		interpret(context: Context): void
	}

	export class TerminalExpression implements AbstractExpression {
		public interpret(context: Context): void {
			console.log('`interpret` method of TerminalExpression is being called!')
		}
	}

	export class NonterminalExpression implements AbstractExpression {
		public interpret(context: Context): void {
			console.log('`interpret` method of NonterminalExpression is being called!')
		}
	}
}

//

export function show(): void {
	var context: InterpreterPattern.Context = new InterpreterPattern.Context(),
		list = [],
		i = 0,
		max

	list.push(new InterpreterPattern.NonterminalExpression())
	list.push(new InterpreterPattern.NonterminalExpression())
	list.push(new InterpreterPattern.NonterminalExpression())
	list.push(new InterpreterPattern.TerminalExpression())
	list.push(new InterpreterPattern.NonterminalExpression())
	list.push(new InterpreterPattern.NonterminalExpression())
	list.push(new InterpreterPattern.TerminalExpression())
	list.push(new InterpreterPattern.TerminalExpression())

	for (i = 0, max = list.length; i < max; i += 1) {
		list[i].interpret(context)
	}
}
