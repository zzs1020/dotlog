import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

type Props = {
    classic?: boolean
};

type State = {
    justInit: boolean,
    content: string
};

class Composer extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            justInit: true,
            content: `<p style="color: #aaa">Write something...</p>`
        };

        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.removeInitContent = this.removeInitContent.bind(this);
    }

    handleEditorChange(content: string) {
        this.setState({content});
    }

    removeInitContent() {
        this.setState((prev) => {
            if (prev.justInit) {
                return {
                    justInit: false,
                    content: ''
                };
            } else {
                // explictly return null will tell react don't re-render
                return null;
            }
        });
    }

    render() {
        const {classic} = this.props;
        return (
            <div>
                <Editor apiKey="w3j1bncqoagz04g05fjkqrxy924xrmdk6ws9xi7dnhryen2f" value={this.state.content}
                    init={{
                        height: 500, // won't affect inline mode
                        theme: classic ? 'modern' : 'inlite',
                        toolbar: classic,
                        menubar: classic,
                        inline: !classic,
                        selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable'
                    }}
                    onFocus={this.removeInitContent}
                    onEditorChange={this.handleEditorChange} />
            </div>
        );
    }
}

export default Composer;
