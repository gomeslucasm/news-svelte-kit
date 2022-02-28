<script>
	import '../app.css';
</script>

<div id="header">
	<div id="return-button">
		<slot name='return-button' />
	</div>
	<span> SVEN NEWS </span>
</div>

<slot/>



<style>
	#header {
		height: 54px;
		width: 100%;
		text-align: center;
		position: relative;
		background-color: #ffbd14;
    display: flex;
    margin-bottom: 1rem;
	}
	#return-button {
		text-align: center;
		height: 100%;
		width: 54px;
		position: absolute;
		left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
	}
  span{
    margin: auto;
    font-weight: 700;
    line-height:29.9px;
  }
</style>
