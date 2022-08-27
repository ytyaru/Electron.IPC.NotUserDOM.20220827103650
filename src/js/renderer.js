window.addEventListener('DOMContentLoaded', async(event) => {
    console.log('DOMContentLoaded!!');
    // Uncaught (in promise) Error: An object could not be cloned.
    // DOM要素を渡すと上記エラーになることを確認できた
    await window.myApi.testDom(document.querySelector('#test-dom'))
})
