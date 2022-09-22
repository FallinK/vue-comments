<template>
	<section class="add-comment" >
      <form class="add-comment__body" @submit.prevent>
        <input-ui
          v-focus
          v-model="comment.name"
          class="add-comment__text add-comment__text_name"
          type="text"
          placeholder="Nickname"
        />
        <input-ui
          v-model="comment.body"
          class="add-comment__text"
          type="text"
          placeholder="Comment"
        />
        <button-ui @click="createComment" class="add-comment__submit">Отправить</button-ui>
      </form>
  </section>
</template>

<script>
import addComment from '@/mixins/addComent';
export default {
	mixins: [
    addComment,
  ],
  data() {
		return {
			comment: {
				name: '',
				body: '',
			}
		}
	},
}
</script>

<style lang="scss" scoped>
/*ADD-COMMENT*/
.add-comment {
		&__body {
      margin: 30px;
      display: flex;
      justify-content: center;
      gap: 20px;
		}
    &__text {
      width: 800px;
      &_name {
        width: 150px;
      }
    }
    &__submit {
      
    }
}
</style>