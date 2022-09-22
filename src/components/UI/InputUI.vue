<template>
	<input
		class="input-ui"
		type="text"
		:value="modelValue"
		@input="updateValue"
	>
</template>

<script>
export default {
	name: 'input-ui',
	props: {
		modelValue: {
			type: [String, Number],
		}
	},
	methods: {
		updateValue(event){
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>

<style lang="scss" scoped>
	.input-ui {
		border: 2px solid lightseagreen;
      font-size: 16px;
      border-radius: 5px;
      padding: 10px 15px;
			&:focus {
        border: 2px solid rgb(22, 122, 117);
      }
	}
</style>