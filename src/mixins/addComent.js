export default {
	methods: {
		createComment(){
			this.comment.id = Date.now();
      this.$emit('addComment', this.comment);
			this.comment = {
				name: '',
				body: '',
			}
    }
	}
}