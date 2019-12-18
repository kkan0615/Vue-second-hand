<!--
    Author: Youngjin Kwak
    Start: 11/02/2019
    Update: 12/17/2019
    Purpose: Component for write post
 -->

 <template>
    <div>
        <div class="write-form">
            <label for="title">Title</label>
            <input v-model="title" type="text" required placeholder="제목"> <br>
            <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
                <div class="menubar">
                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bold() }"
                    @click.prevent="commands.bold"
                    >
                    bold
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.italic() }"
                    @click.prevent="commands.italic"
                    >
                    italic
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.strike() }"
                    @click.prevent="commands.strike"
                    >
                    strike
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.underline() }"
                    @click.prevent="commands.underline"
                    >
                    underline
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code() }"
                    @click.prevent="commands.code"
                    >
                    code
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.paragraph() }"
                    @click.prevent="commands.paragraph"
                    >
                    paragraph
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                    @click.prevent="commands.heading({ level: 1 })"
                    >
                    H1
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                    @click.prevent="commands.heading({ level: 2 })"
                    >
                    H2
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                    @click.prevent="commands.heading({ level: 3 })"
                    >
                    H3
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bullet_list() }"
                    @click.prevent="commands.bullet_list"
                    >
                    ul
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.ordered_list() }"
                    @click.prevent="commands.ordered_list"
                    >
                    ol
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.blockquote() }"
                    @click.prevent="commands.blockquote"
                    >
                    quote
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code_block() }"
                    @click.prevent="commands.code_block"
                    >
                    code
                    </button>

                    <button
                    class="menubar__button"
                    @click.prevent="commands.horizontal_rule"
                    >
                    hr
                    </button>

                    <button
                    class="menubar__button"
                    @click.prevent="commands.undo"
                    >
                    undo
                    </button>

                    <button
                    class="menubar__button"
                    @click.prevent="commands.redo"
                    >
                    redo
                    </button>

                </div>
                </editor-menu-bar>
                <editor-content class="editor__content" :editor="editor" />
                <label for="hashTags">해쉬태그</label> <br>
                <textarea v-model="hashTags" type="textarea" required placeholder=""></textarea> <br>
                <label for="">기한 없음</label>
                <input v-model="isInfinity" type="checkbox" checked> <br>
                <label for="time">time</label>
                <input v-model="time" type="date"> <br>
            <button type="submit" @click="onSubmitForm()">Submit</button>
        </div>
    </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    HorizontalRule,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History,
} from 'tiptap-extensions'
export default {
  components: {
        EditorContent,
        EditorMenuBar,
  },
  data() {
    return {
        title: '',
        hashTags: '',
        editor: null,
        isInfinity: true,
        time: '2019-01-01',
    }
  },
    mounted() {
        this.editor = new Editor({
            extensions: [
                new Blockquote(),
                new CodeBlock(),
                new HardBreak(),
                new Heading({ levels: [1, 2, 3] }),
                new HorizontalRule(),
                new BulletList(),
                new OrderedList(),
                new ListItem(),
                new TodoItem(),
                new TodoList(),
                new Bold(),
                new Code(),
                new Italic(),
                new Link(),
                new Strike(),
                new Underline(),
                new History(),
            ],
            content: '<p>내용을 입력해주세요</p>',
        });
    },
    methods: {
        /**
         * Author: Youngjin Kwak,
         * Purpose: To submit file to database
         */
        onSubmitForm() {
            this.$axios.post('http://127.0.0.1:8001/products/write', {
                title: this.title,
                hashTags: this.hashTags,
                content: this.editor.view.dom.innerHTML,
                isInfinity: this.isInfinity,
                time: this.time,
            }, {
                withCredentials: true,
            }).then((res) => {
                alert('성공적으로 만들어졌습니다.');
                this.$router.push({
                   name: 'products-id',
                   params: { id: res.id },
               });
            }).catch((err) => {
                console.error(err);
                console.log(err);
                alert('실패했습니다. 다시 시도해주세요 ' + err.message);
            });;
        }
    },
    beforeDestroy() {
        this.editor.destroy()
    },
}
</script>

<style lang="scss" scoped>
.editor__content {
            font-size: 20px;
            width: 98%;
            border: 2px solid black;
            height: 300px;
            margin: 10px 0px 10px 0px;
        }

        .menubar__button {
            padding: 3px;
            border: none;
            outline: none;
            cursor: pointer;
            text-align: center;
            width: 20%;
            margin: 5px;
            height: 20px;
        }
</style>