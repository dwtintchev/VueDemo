var app = new Vue({
	el: "#app", 
	data: {
		message: "", 
		message2: "", 
		checkedNames: [], 
		picked: ""
	}, 
	methods: {
		submit:function(){
			var postObj = {
				msg1: this.message,
				msg2: this.message2,
				checkVal: this.checkedNames
			}
			console.log(postObj)
		}
	}
})