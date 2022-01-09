import { animateChild, query, transition, trigger } from "@angular/animations";

export const Container = [
	trigger('container', [
		transition(':enter, :leave', [
			query('@*', animateChild()),
		]),
	]),
];