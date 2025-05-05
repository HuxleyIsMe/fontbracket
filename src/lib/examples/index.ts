import { go, js, python, rust } from './fizzbuzz';
export type Language = 'go' | 'js' | 'python' | 'rust';
export type Examples = {
	[key in Language]: string;
};

export const examples: Examples = {
	go,
	js,
	python,
	rust
};
