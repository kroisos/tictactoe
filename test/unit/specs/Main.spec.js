import Vue from 'vue';
import home from '@/components/Home';
import texts from '@/texts';

describe('Main.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('#play').textContent)
      .toEqual(texts.button.play);
    expect(vm.$el.querySelector('#settings').textContent)
      .toEqual(texts.button.settings);
  });
});
