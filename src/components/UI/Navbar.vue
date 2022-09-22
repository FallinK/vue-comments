<template>
	<header class="header">
		<div class="header__logo" @click="$router.push('/')">
			Vue 3
		</div>
		<nav class="header__menu menu">
			<div class="menu__body">
				<ul class="menu__list">
					<li class="menu__item"><button-ui @click="$router.push('/comments')">Комментарии</button-ui></li>
					<li class="menu__item"><button-ui @click="$router.push('/about')">О сайте</button-ui></li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'navbar-ui',
}
</script>

<style lang="scss" scoped>
	.header {
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
		background: rgb(22, 22, 22);
		box-shadow: 2px 2px 10px rgb(119, 119, 119);
		&__logo {
			color: teal;
			cursor: pointer;
			font-size: 18px;
			font-weight: 700;
		}
		&__menu {
		}
}
.menu {
		&__body {
		}
		&__list {
			display: flex;
			gap: 20px;
		}
		&__item {
			color: #fff;
			cursor: pointer;
		}
}

</style>