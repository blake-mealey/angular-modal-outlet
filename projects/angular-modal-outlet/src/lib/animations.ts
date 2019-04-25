import { animation, style, animate, trigger, state, transition, useAnimation, group, query, animateChild } from '@angular/animations';

//region pop
const popDefaultParams = {
  duration: '0.2s ease',
  scale: 0.75
};

const popStyle = {
  opacity: 0,
  transform: 'scale({{ scale }})'
};

const popIn = animation([
  style(popStyle),
  animate('{{ duration }}')
], {
  params: popDefaultParams
});

const popOut = animation([
  animate('{{ duration }}'),
  style(popStyle)
], {
  params: popDefaultParams
});
//endregion

//region fade
const fadeDefaultParams = {
  duration: '0.2s ease'
};

const fadeStyle = {
  opacity: 0
};

const fadeIn = animation([
  style(fadeStyle),
  animate('{{ duration }}')
], {
  params: fadeDefaultParams
});

const fadeOut = animation([
  animate('{{ duration }}'),
  style(fadeStyle)
], {
  params: fadeDefaultParams
});
//endregion

export const overlayFadeTrigger = trigger('overlayFade', [
  state('out', style({
    display: 'none'
  })),
  state('in', style({})),
  transition('out => in', [
    group([
      useAnimation(fadeIn),
      query('@modalFade', [
        animateChild()
      ])
    ])
  ]),
  transition('in => out', [
    group([
      useAnimation(fadeOut),
      query('@modalFade', [
        animateChild()
      ])
    ])
  ])
]);

export const modalFadeTrigger = trigger('modalFade', [
  state('out', style({})),
  state('in', style({})),
  transition('out => in', [
    useAnimation(popIn)
  ]),
  transition('in => out', [
    useAnimation(popOut)
  ])
]);
