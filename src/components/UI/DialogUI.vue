<template>
	<section class="modal-window" v-if="showDialog" @click="$emit('update:showDialog', false)">
		<div class="modal-window__body" @click.stop>
			<slot></slot>
		</div>
	</section>
</template>

<script>
export default {
	name: 'dialog-ui',
	props: {
		showDialog: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>
	.modal-window {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba($color: #000000, $alpha: 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		&__body {
			padding: 20px;
			background: #fff;
			border-radius: 15px;
			min-width: 300px;
			min-height: 50px;
		}
	}
</style>