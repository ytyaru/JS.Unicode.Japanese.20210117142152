window.addEventListener('load', (event) => {
    let PARSER = null;
    document.querySelector('#selector').addEventListener('change', (event)=>{
        const value = document.querySelector('#selector').value;
        console.log('selector change', event, this);
//        console.log('value', this.value);
        console.log('value', value);
//        PARSER = getParser(event.data);
        PARSER = getParser(value);
        console.log(PARSER);
        parse();
    });
    document.querySelector('#selector').addEventListener('input', (event)=>{
        const value = document.querySelector('#selector').value;
        console.log('selector input', event, this);
//        console.log('value', this.value);
        console.log('value', value);
//        PARSER = getParser(event.data);
        PARSER = getParser(value);
        console.log(PARSER);
        parse();
    });
    document.querySelector('#editor').addEventListener('input', (event)=>{
        console.log('input');
        console.log(event);
        parse();
        /*
        console.log(Kakuyomu);
        const editor = document.querySelector('#editor');
        const viewer = document.querySelector('#viewer');
        viewer.value = Kakuyomu.toHtml(editor.value);
//        viewer.value = K.parse(editor.value);
        */
        /*
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
        */
    });
    function getParser(id) {
        return eval(id);
        /*
        if ('Kakuyomu' === id) { return Kakuyomu; }
        else if ('Narou' === id) { return Kakuyomu; }
        else { return Kakuyomu; }
        */
    }
    function parse() {
        if (PARSER) {
            const editor = document.querySelector('#editor');
            const viewer = document.querySelector('#viewer');
            viewer.value = PARSER.toHtml(editor.value);
        }
    }
//    document.querySelector('#selector').trigger('input');
//    document.querySelector('#selector').trigger('change');
//    $('#selector').trigger('input');
    $('#selector').trigger('change');
});
