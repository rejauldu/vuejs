<template>
  <div id="app" class="bg-dark">
    <div class="container bg-secondary vh">
        <div class="row">
            <div class="col-12">
                <router-view :key="$route.fullPath"></router-view>
            </div>
        </div>
    </div>
    <cart></cart>
  </div>
</template>
<style>
	.vh {
		min-height: 100vh;
	}
	.vh-50 {
		position: fixed;
		right: 0;
		top:50%;
		transform: translate(0, -50%);
	}
	.weight-25 {
		width:25px;
		text-align: center;
	}
	.height-25 {
		height:25px;
		line-height: 25px;
	}
	.grad {
		background-image: linear-gradient(to right, #B6793F, #ff59af);
	}
	.text-warning-deep {
		color: #B6793F;
	}
	.text-danger-deep {
		color: #ff59af;
	}
	.bg-warning-deep {
		background: #B6793F;
	}
	.border-warning-deep {
		border-color: #B6793F !important;
		border-width:2px !important;
	}
</style>
