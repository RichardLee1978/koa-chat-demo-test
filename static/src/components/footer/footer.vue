<style lang="less" scoped>
	.chat-footer {
		background: #fff;
		
		display: flex;
		flex-direction:row;
		padding:0.25rem;
		flex:1 1 auto;
		input {
			flex:2 1 auto;
			font-style: normal;
			text-align: left;
			font-size:0.5rem;
			padding:0.125rem;
		}
		button {
			flex:1 1 auto;
			text-align: center;
			font-size:0.5rem;
			text-align: center;
			padding:0.125rem;
		}
	}
</style>
<template>
	<footer class="chat-footer">
		<input type="text">
		<button>提交</button>
	</footer>
</template>
<script>
   
    export default {
       
    }
</script>