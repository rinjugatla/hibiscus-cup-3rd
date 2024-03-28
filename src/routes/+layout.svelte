<script>
	import Footer from '$lib/components/commons/Footer.svelte';
import Header from '$lib/components/commons/Header.svelte';
	import '../app.pcss';
</script>

<div class="relative pb-14 min-h-screen h-full bg-hibiscus_cup_theme">
	<Header />
	<div>
		<slot />
	</div>
	<Footer />
</div>