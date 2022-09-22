<template>
	<main class="main">
		<rating-counter
			:counter="counter" 
		/>
		<input-ui
      v-focus
			placeholder="Поиск...."
			v-model="searchedString"
		>
		</input-ui>
		<div class="buttons-ui">
			<button-ui @click="showDialogChange">Добавить комментарий</button-ui>
			<select-ui v-model="selectedSort" :options="optionsSort"></select-ui>
		</div>
		<dialog-ui
			v-model:showDialog="showDialog"
		>
			<add-comment @addComment="addComment"/>
		</dialog-ui>
		<user-comments
			v-if="!loadingComments"
			:comments="sortedAdnSearchedComments"
			@removeComment="removeComment"
		/>
		<h3 class="h3-title" v-else>Загрузка комментариев</h3>
		<div v-intersection="{loadMoreComments: loadMoreComments, page: this.page, totalPages: this.totalPages}" class="observer"></div>
	</main>
  <!-- <section class="pagination">
    <div class="container">
      <div class="pagination__body">
        <div
          class="pagination__page page"
          v-for="pageNumber in totalPages"
          @click="changePage(pageNumber)"
          :key="pageNumber"
          :class="{
            'page__active': page === pageNumber
          }"
        >
          {{pageNumber}}
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
import axios from 'axios';
import AddComment from '@/components/AddComment.vue';
import UserComments from '@/components/UserComments.vue';

export default {
  components: { AddComment, UserComments},
  data() {
    return {
      counter: {
        isVoted: undefined,
        likes: 15,
        dislikes: 3,
      },
      comments: [],
      page: 1,
      limit: 10,
      totalPages: 2,
      showDialog: false,
      loadingComments: false,
      selectedSort: '',
      searchedString: '',
      optionsSort: [
        {value: 'name', name: 'По имени'},
        {value: 'body', name: 'По содержимому'},
      ],
    }
  },
  methods: {
    addComment(newComment){
      this.comments.push(newComment);
      this.showDialog = false;
    },
    removeComment(post) {
      this.comments = this.comments.filter((element) => element.id != post.id);
    },
    showDialogChange() {
      this.showDialog = true;
    },
    // changePage(pageNumber)
    // {
    //   this.page = pageNumber;
    // },
    async fetchCommetns() {
      try {
        this.loadingComments = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
          params: {
            _limit: this.limit,
            _page: this.page,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit );
        this.comments = response.data;
      }
      catch(e) {
        console.log('Возникла проблема при попытке подгрузить комментарии');
      }  finally {
        this.loadingComments = false;
      }
    },
    async loadMoreComments() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
          params: {
            _limit: this.limit,
            _page: this.page,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit );
        this.comments = [...this.comments, ...response.data];
      }
      catch(e) {
        console.log('Возникла проблема при попытке подгрузить комментарии');
      }
    },
  },
  mounted() {
    this.fetchCommetns();
  },
  computed: {
    sortedComments() {
      return [...this.comments].sort((comment1, comment2) => comment1[this.selectedSort]?.localeCompare(comment2[this.selectedSort]));
    },
    sortedAdnSearchedComments() {
      return this.sortedComments.filter(comment => comment.name.toLowerCase().includes(this.searchedString.toLowerCase()));
    },
  },
  watch: {
    // page() {
    //   this.fetchCommetns();
    // }
  }
}
</script>

<style lang="scss">
.main {
	display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
}
.h3-title {
  margin: 15px 0 0 0;
}
.buttons-ui {
  margin: 15px 0 0 0;
  display: flex;
  justify-content: space-between;
  gap: 50px;
}
// .pagination {
//   margin: 20px 0 0 0;
// 		&__body {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 10px;
//       justify-content: center;
// 		}
//     &__page {
//       border: 1px solid #000000;
//       padding: 5px;
//       cursor: pointer;
//     }
// }
// .page {
//     &__active {
//       border: 2px solid teal;
//     }
// }
</style>