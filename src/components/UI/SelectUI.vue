<template>
	<select v-model="modelValue" @change="changeOption">
		<option value="" disabled>Выберите из списка</option>
		<option :value="option.value" v-for="option in options" :key="option.value">
			{{option.name}}
		</option>
	</select>
</template>

<script>
export default {
	name: 'select-ui',
	props: {
		modelValue: {
			type: String,
		},
		options: {
			type: Array,
			default: () => [],
		}
	},
	methods: {
		changeOption(event) {
			this.$emit('update:modelValue', event.target.value);
		}
	}
}
</script>

<style lang="scss" scoped>
	select {
		border: 2px solid teal;
	}
</style>