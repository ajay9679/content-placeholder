const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const getData = () => {
	header.innerHTML = `
		<img src="https://images.unsplash.com/photo-1623081669685-455b7290483b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
	`;
	title.innerHTML = 'Lorem Ipsum dolor sit amet.';
	excerpt.innerHTML = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.`;
	profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
	name.innerHTML = `John Doe`;
	date.innerHTML = `28 Oct, 2021`;
	// const arr = ['animated-bg', 'animated-bg-text'];
	// arr.forEach(bg => bg.classList.remove(arr));
	animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
	animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

setTimeout(getData, 2500);







