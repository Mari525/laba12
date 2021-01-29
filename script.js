new Vue({
	el: '#app',
	data: {
		surnameInput: '',
		nameInput: '',
		list: [],
		btn: true,
	},
	methods: {
		dataAdd: function () {
			if (this.surnameInput !== '' && this.nameInput !== '') {
				const data = {};
				data.one = this.surnameInput;
				data.two = this.nameInput;
				tmp1 = this.surnameInput[0];
				tmp2 = this.nameInput[0];
				this.surnameInput = this.surnameInput.toLowerCase().slice(1);
				this.nameInput = this.nameInput.toLowerCase().slice(1);
				this.surnameInput = tmp1.toUpperCase() + this.surnameInput;
				this.nameInput = tmp2.toUpperCase() + this.nameInput;
				this.list.push(`${this.surnameInput} ${this.nameInput}`);
				this.surnameInput = '';
				this.nameInput = '';
			}
		},
	},
	watch: {
		surnameInput(value) {
			if (value.length > 0 && this.nameInput.length > 0) {
				this.btn = false;
			} else {
				this.btn = true;
			}
		},
		nameInput(value) {
			if (value.length > 0 && this.surnameInput.length > 0) {
				this.btn = false;
			} else {
				this.btn = true;
			}
		},
	},

});