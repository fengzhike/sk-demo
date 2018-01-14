import 'hello.css';
class Hello {
	init() {
		console.log("hello");
		this.taggleEvent()
	},
	taggleEvent() {
		document.querySelector('.sk-hello-content').onclick = () {
			alert('hello')
		}
	}
}