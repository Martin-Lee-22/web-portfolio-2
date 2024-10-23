import {style, animate, trigger, transition, query, stagger} from '@angular/animations';

const upwardsRevealStagger = trigger('upwardsRevealStagger', [
    transition(':enter', [ 
        query('div', [    
            style({opacity: 0, display: 'none'}),
            stagger('0.20s', [animate('0.4s ease-out', style({opacity: 1, display: 'block'}))])
        ])
    ])
])

const expandStagger = trigger('expandStagger', [
    transition(':enter', [ 
        query('li', [    
            style({width: 0}),
            stagger(500, [animate('1s ease-out', style({width: '100%'}))])
        ])
    ])
])

const pageTransition = trigger('pageTransition', [
	transition(':enter', [
        style({
            borderTop: '5px solid #50d22e', 
            borderBottom: '5px solid #50d22e', 
            boxShadow: '0 0 5px 8px #50d22e',
            height: 0}),
		animate('0.5s 0s ease-out', style({ 
            borderTop: '0px solid #50d22e', 
            borderBottom: '0px solid #50d22e', 
            height: '100%' })),
	]),
])

const modalReveal = trigger('modalReveal', [
	transition(':enter', [
        style({
            borderTop: '5px solid #50d22e', 
            borderBottom: '5px solid #50d22e', 
            boxShadow: '0 0 5px 8px #50d22e',
            height: 0}),
		animate('0.5s 0s ease-in-out', style({ 
            borderTop: '0px solid #50d22e', 
            borderBottom: '0px solid #50d22e', 
            height: '100%' })),
	]),
])


const modalExit = trigger('modalExit', [
	transition(':leave', [
		animate('0.25s 0s ease-in-out', style({ 
            borderTop: '0px solid #50d22e', 
            borderBottom: '0px solid #50d22e', 
            height: '0%' })),
	]),
])

const responseExit = trigger('responseExit', [
	transition(':leave', [
		animate('0.5s 0s ease-in-out', style({ 
            borderLeft: '0px solid #50d22e', 
            right: '0',
            width: '0%' 
        })),
	]),
])



export {pageTransition, upwardsRevealStagger, expandStagger, modalReveal, modalExit, responseExit}