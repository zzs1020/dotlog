import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Composer = () => (
    <div>
        <Editor apiKey="w3j1bncqoagz04g05fjkqrxy924xrmdk6ws9xi7dnhryen2f" initialValue="<p>Say something...</p>"
        init={{
            theme: 'inlite',
            toolbar: false,
            menubar: false,
            inline: true,
            selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable'
          }}
        onChange={handleEditorChange} />
    </div>
);

const handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
};

export default Composer;
