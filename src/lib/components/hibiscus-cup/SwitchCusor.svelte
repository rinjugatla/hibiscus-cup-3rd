<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { CaretLeftOutline } from "flowbite-svelte-icons";

    /**
     * 繰り上げる方向
     */
    export let mode: "prev" | "next";
    /**
     * 現在のインデックス
     */
    export let currentIndex: number;
    /**
     * 最大のインデックス
     */
    export let maxIndex: number;

    $: canSwitch = mode === "prev" && 0 < currentIndex  || mode === "next" && currentIndex < maxIndex - 1;
</script>


<button type="button"
    class:rotate-180={mode === "next"}
    class="rounded-l-full bg-opacity-60" 
    class:bg-white={canSwitch}
    class:bg-gray-400={!canSwitch}
    disabled={!canSwitch}
    on:click={() => mode === "prev" ? currentIndex -= 1 : currentIndex += 1} >
    <CaretLeftOutline size="xl" class=" outline-0" />
</button>