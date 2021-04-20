# MochiSwap-PriceFetcher
Chrome Extension that fetches the current price of a pair and outputs it.

At the time of writing this extension, MochiSwap did not have an API to fetch information about a pair in order to integrate it somewhere.
This chrome extension waits for the user to select a pair, and then fetches the HTML Element that shows the price of Pair 1 per Pair 2.


# How to use it
1. [Download MochiSwap-PriceFetcher](https://downgit.github.io/#/home?url=https://github.com/strajk-/MochiSwap-PriceFetcher/tree/main/MochiSwap-PriceFetcher) and open chrome://extensions/
2. Drag the downloaded directory into the chrome://extensions/ window to install it
3. Navigate to https://one.mochiswap.io/#/swap
4. Select two Pairs, example: Pair1 = 1USDT / Pair2 = ONE
5. Input 1 into the From: field of Pair1

Now press your F12 key and switch to the Console tab, it should start outputting the Datetime and Price of 1USDT per ONE every 5 seconds.

As a small failsafe the extension does check if the From field has a value superior to 0, it also checks if the price of Pair1 per Pair2 is higher than 0 before outputting it.

.js File doing the above is located unter [MochiSwap-PriceFetchet\content\content.js](https://github.com/strajk-/MochiSwap-PriceFetcher/blob/main/MochiSwap-PriceFetcher/content/content.js)

This is just a mockup template you can use to dump the data somewhere in order to design your own chart, fork this repo and replace [Line 10 of content.js](https://github.com/strajk-/MochiSwap-PriceFetcher/blob/4238a4c268faa9cb87dcc418a22f1fefb250dc4e/MochiSwap-PriceFetcher/content/content.js#L10) with whatever you want, output it to a file, directly PUT it into a dataset, you name it, ball is on your side now champ time to get creative.

![image](https://user-images.githubusercontent.com/7372902/115428794-0eb0c700-a203-11eb-882e-1781fba37406.png)
