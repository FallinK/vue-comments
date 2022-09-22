<template>
	<button class="button-ui"><slot></slot></button>
</template>

<script>
export default {
	name: 'button-ui',
}
</script>

<style lang="scss" scoped>
	.button-ui {
		color: lightseagreen;
      font-size: 16px;
      padding: 10px 15px;
      border: 2px solid lightseagreen;
      transition: 0.3s all ease;
      border-radius: 5px;
      background: none;
      &:hover {
        border: 2px solid rgb(22, 122, 117);
      }
	}
</style>