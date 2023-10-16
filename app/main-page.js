import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function goToAboutPage(args) {
  const button = args.object;
  const page = button.page;
  frame.page.navigateTo('about-page');
}
