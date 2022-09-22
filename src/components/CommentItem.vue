<template>
	<div class="comment-item">
		<div class="comment-item__name">
			{{comment.name}}
		</div>
		<div class="comment-item__text">
			{{comment.body}}
		</div>
		<div class="comment-item__buttons">
			<button-ui
				class="comment-item__button"
				@click="$router.push(`/comments/${comment.id}`)"
			>
				Профиль
			</button-ui>
			<button-ui 
				class="comment-item__button"
				@click="$emit('removeComment', comment)"
			>
				Удалить
			</button-ui>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		comment: {
			type: Object,
			require: true
		}
	}
}
</script>

<style lang="scss" scoped>
	.comment-item {
		display: flex;
		flex-direction: column;
		gap: 15px;
		border: 2px solid lightseagreen;
		border-radius: 15px;
		padding: 10px 20px;
		&:not(:first-child){
			margin: 30px 0 0 0;
		}
		&__name {
			font-size: 20px;
			letter-spacing: 2px;
			text-decoration: #000 underline solid;
		}
		&__text {
			font-size: 16px;
			&:first-letter {
				padding: 0 0 0 5px;
			}
		}
		&__button {
			align-self: flex-end;
		}
}
</style>