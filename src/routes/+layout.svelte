<script>
	import Footer from '$lib/components/commons/Footer.svelte';
import Header from '$lib/components/commons/Header.svelte';
	import '../app.pcss';
</script>

<svelte:head>
	<title>HibiscusCUP inEFT 3rd fan</title>
	<meta name="description" content="第三回HibiscusCUP inEFTのファンサイト" />
</svelte:head>

<div class="relative pb-14 min-h-screen h-full bg-hibiscus_cup_theme">
	<Header />
	<div class="my-5">
		<slot />
	</div>
	<Footer />
</div>