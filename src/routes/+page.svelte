<script lang="ts">
	import { browser } from "$app/environment";

    const tweets = [
        {
            title: 'イベント概要',
            contents: '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">🌺BIG NEWS🌺<br><br>4/7(日) 18:30- <br>「第3回 <a href="https://twitter.com/hashtag/HibiscusCUP?src=hash&amp;ref_src=twsrc%5Etfw">#HibiscusCUP</a> inEFT」<br>開催決定ー!!🥳<br><br>今回は3種目<br>「謎解き」「フラッグ戦」「クイズ」👀！<br>６組１８名の<br>ストリーマーの皆様をご招待！<br><br>視聴者プレゼントの詳細は後日！<br>お楽しみに😉<a href="https://twitter.com/hashtag/%E3%82%BF%E3%83%AB%E3%82%B3%E3%83%95?src=hash&amp;ref_src=twsrc%5Etfw">#タルコフ</a>　<a href="https://twitter.com/hashtag/EscapefromTarkov?src=hash&amp;ref_src=twsrc%5Etfw">#EscapefromTarkov</a> <br><br>🎬詳細、ストリーマーの皆様はコチラ！ <a href="https://t.co/hmPldTNYVy">pic.twitter.com/hmPldTNYVy</a></p>&mdash; りえぺこ🌺:) @4/7 EFTイベ HibiscusCUP主催 (@Riepeko_yolo) <a href="https://twitter.com/Riepeko_yolo/status/1768570506708767059?ref_src=twsrc%5Etfw">March 15, 2024</a></blockquote>'
        },
        {
            title: 'プレゼント企画',
            contents: '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/HibiscusCUP?src=hash&amp;ref_src=twsrc%5Etfw">#HibiscusCUP</a> ×ゆんま工房コラボ<br>＼視聴者様プレゼントキャンペーン／<br><br>当ポストのリプ欄にて<br> 優勝チームを予想しよう！<br> ゆんま先生(<a href="https://twitter.com/Yuika_flw?ref_src=twsrc%5Etfw">@Yuika_flw</a>)が描く<br> 優勝チームイラスト、大会ロゴ等<br> ゆんま工房オリジナル缶バッジが当たる！<br> ※住所を教えて頂ける方<br><br> 当選者数：３名… <a href="https://t.co/zruRonzutX">https://t.co/zruRonzutX</a></p>&mdash; りえぺこ🌺:) @4/7 EFTイベ HibiscusCUP主催 (@Riepeko_yolo) <a href="https://twitter.com/Riepeko_yolo/status/1773645969114136872?ref_src=twsrc%5Etfw">March 29, 2024</a></blockquote>'
        }
    ];
</script>

<div>
    {#if browser}
        <script async src="https://platform.twitter.com/widgets.js"></script>
    {/if}

    {#each tweets as tweet}
    <div class="text-center flex justify-center">
        <div>
            {@html tweet.contents}
        </div>
    </div>
    {/each}
</div>