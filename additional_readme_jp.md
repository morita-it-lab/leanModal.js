
追加機能
==================================================

* 開く用のタグを作らず、直接JavaScriptからモーダルを開ける機能を追加
* JavaScriptから閉じる機能を追加
* leanModalを複数回呼び出した際に #lean_overlay を複数作らないように修正
* overlayをクリックした際にモーダルを閉じないようにするオプションを追加


JavaScriptからモーダルを開く
----------------------------

```js
$('#modal_id').leanModal({
	open: true,
});
```


JavaScriptからモーダルを閉じる
---------------------------

```js
$('#modal_id').leanModal({
	open: close,
});
```


オーバーレイをクリックしても閉じないようにする
---------------------------------------

```js
$('#modal_id').leanModal({
	closeClickOverlay: false,
});
```
