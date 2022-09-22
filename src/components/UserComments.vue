<template>
	<section class="comments">
    <div class="container" v-if="comments.length > 0">
      <h3>Комментарии</h3>
      <div
        class="comments__body"
      >
      <transition-group name="comments-list">
        <comment-item
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
          @removeComment="$emit('removeComment', comment)"
        />
      </transition-group>
      </div>
    </div>
    <div class="container" v-else>
      <h3>Комментариев пока нет</h3>
    </div>
  </section>
</template>

<script>
import CommentItem from './CommentItem.vue'
export default {
  components: { CommentItem },
	props: {
		comments: {
			type: Array,
			required: true
		}
	}
}
</script>
<style lang="scss" scoped>
  .comments {
    &__body{
      margin: 15px 0 0 0;
    }
  }
  h3 {
    margin: 15px 0 0 0;
  }
  .comments-list-item {
    display: inline-block;
  }
  .comments-list-enter-active,
  .comments-list-leave-active {
    transition: all 0.3s ease;
  }
  .comments-list-enter-from,
  .comments-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }
  .comments-list-move {
    transition: transform 0.8s ease;
  }
</style>