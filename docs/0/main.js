window.addEventListener('load', (event) => {
    const J = new Japanese();
    /* フォーカスを抜けないと確定しない
    document.querySelector('#editor').addEventListener('change', (event)=>{
        console.log('change');
    });
    */
    document.querySelector('#editor').addEventListener('input', (event)=>{
        console.log('input');
        console.log(event);
        const editor = document.querySelector('#editor');
        const viewer = document.querySelector('#viewer');
        console.log(editor.value);
        if (J.isHiragana(editor.value)) {
            viewer.value = 'すべてひらがなです！';
        } else if (J.isKatakana(editor.value)) {
            viewer.value = 'すべてカタカナです！';
        } else if (J.isCjk(editor.value)) {
            viewer.value = 'すべてCJK統合漢字です！';
        } else {
            viewer.value = '';
        }
        console.log('ひら:', J.isHiragana(editor.value));
        console.log('カタ:', J.isKatakana(editor.value));
        console.log('漢字:', J.isCjk(editor.value));
    });
});
