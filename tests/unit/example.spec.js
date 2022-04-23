import { mount } from "@vue/test-utils";

const App = {
	template: `
  <div>Hi World</div>
  `,
};

test("test App Component", function () {
	const wrapper = mount(App);
	console.log(wrapper.text());
});
