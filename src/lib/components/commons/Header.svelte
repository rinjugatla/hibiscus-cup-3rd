<script lang="ts">
	import { page } from "$app/stores";
	import { NavBrand, NavLi, NavUl, Navbar, NavHamburger } from "flowbite-svelte";

	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="bg-hibiscus_cup_theme_header">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			HibiscusCUP inEFT 3rd fan
		</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/sponsors">Sponsors</NavLi>
		<NavLi href="/teans">Teams</NavLi>
		<NavLi href="/streams">Streams</NavLi>
	</NavUl>
</Navbar>
