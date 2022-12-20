import { animate, animation, sequence, style } from '@angular/animations';

/**
 * @param time 
 * @param startColor 
 * @param endColor 
 */
export const flashAnimation = animation([
    sequence([
        animate('{{ time }}', style({
            'background-color': '{{ startColor }}'
        })),
        animate('{{ time }}', style({
            'background-color': '{{ endColor }}'
        })),
    ]),
]);