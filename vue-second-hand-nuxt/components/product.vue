<!--
    Author: Youngjin Kwak
    Start: 11/02/2019
    Update: 12/20/2019
    Purpose: Component for write post
 -->

 <template>
    <div>
        <v-alert type="error" v-show="alertMessage">
            {{ alertMessage }}
        </v-alert>
        <template>
            <v-text-field
            v-model="title"
            :error-messages="titleErrors"
            :counter="50"
            label="제목"
            required
            ></v-text-field>
            <v-text-field
            v-model="price"
            :error-messages="priceErrors"
            label="price"
            required
            ></v-text-field>
        <div class="write-form">
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
                <v-text-field
                v-model="hashTags"
                label="hashTags Ex) #tag이름"
                ></v-text-field>
                <v-checkbox
                v-model="isHotDeal"
                :error-messages="isHotDealErrors"
                label="핫딜로 지정하기"
                required
                ></v-checkbox>
                <!-- <v-date-picker v-if="!isInfinity" v-model="time" color="green lighten-1"></v-date-picker> -->
                <v-btn class="mr-4" @click="onSubmitForm()">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
        </div>
        </template>
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
            message: '',
            title: '',
            hashTags: '',
            price: 0,
            editor: null,
            isHotDeal: false,
            //time: '2019-01-01',
            alertMessage: null,
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
                price: this.price,
                isHotDeal: this.isHotDeal,
            }, {
                withCredentials: true,
            }).then((res) => {
                alert('성공적으로 만들어졌습니다.');
                console.log(res);
                this.$router.push({
                   name: 'products-id',
                   params: { id: res.data.product.id },
               });
            }).catch((err) => {
                console.error(err);
                //console.log(err);
                this.alertMessage = err.message;
            });;
        },

        formValid() {
            if(this.price < 0) {
                this.message = '가격은 0원 미만이 될 수 없습니다.';
                return false;
            }
            return true;
        },

        clear() {
            this.message = '';
            this.title = '';
            this.hashTags = '';
            this.price = 0;
            this.isInfinity = true;
            this.editor.view.dom.innerHTML = '글을 입력해주세요';
            this.time = '2019-01-01';
        },
    },
    created() {
        const today = new Date();
        this.time = today.toISOString().substring(0, 10);
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
    border: 3px solid #1FBF84;
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
    font-weight: bold;
}
    /*********************************************************************
    *   signup-form
    *   Author: Youngjin Kwak
    *   StartedAT: 11/03/2019
    *   UpdatedAt:  11/03/2019
    *   Purpose: Write form css
    *   Including:
    *               label: label for each input boxes
    *               input: input box css
    **********************************************************************/
.write-form {
    h1 {
        text-align: center;
    }
    label {
        margin: 50px 0px 50px 0px;
        text-align: center;
        font-size: 30px;
    }
    input {
        margin: 10px 0px 10px 0px;
        width: 96.6%;
        height: 20px;
        font-size: 20px;
        padding: 10px;
        //box-sizing: border-box;
        border: 2px solid #1FBF84;
        border-top: none;
        border-right: none;
        border-left: none;
    }
    input:focus {
        border: 2px solid #1FBF84;
    }
    .submit-button {
        width: 100%;
        background-color: #18D65A;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }

    textarea {
        width: 98%;
        height: 200px;
        border: 3px solid #1FBF84;
    }


}
    .infinity {
        width: 100px;
    }
</style>