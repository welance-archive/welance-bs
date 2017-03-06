<template>
  <div class="styles">
    <h1>{{msg}}</h1>
    <h2>{{msg}}</h2>
    <h3>{{msg}}</h3>
    <h4>{{msg}}</h4>
    <h5>{{msg}}</h5>
    <h6>{{msg}}</h6>
    <hr/>
    <h3> Paragraph </h3>
    <hr/>
    <p>
        {{paragraph}}
    </p>
    <p>
        {{paragraph}}
    </p>
    <hr/>
    <h3> Buttons </h3>
    <hr/>
    <button class="btn btn--primary btn--big" type="button">{{btn_text}}</button>
    <button class="btn btn--primary btn--big" type="button" disabled="disabled">{{btn_text}}</button>
    <br/><br/>
    <button class="btn btn--primary" type="button">{{btn_text}}</button>
    <button class="btn btn--primary" type="button" disabled="disabled">{{btn_text}}</button>
    <br/><br/>
    <button class="btn btn--primary btn--small" type="button">{{btn_text}}</button>
    <button class="btn btn--primary btn--small" type="button" disabled="disabled">{{btn_text}}</button>
    <br/><br/>
    <button class="btn btn--primary btn--tiny" type="button">{{btn_text}}</button>
    <button class="btn btn--primary btn--tiny" type="button" disabled="disabled">{{btn_text}}</button>
    <hr/>
    <h3> Typefaces </h3>
    <hr/>
    <p v-html="alphabet"></p>
    <hr/>
    <h3> Body text </h3>
    <hr/>
    {{paragraph}}
  </div>
</template>

<script>
export default {
    name: 'StyleGuide',
    components: {
    },
    data () {
        return{
            msg: "This is Hello!This is Hello!This is Hello!This is Hello!This is Hello!This is Hello!This is Hello!",
            paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alphabet: " ABCDEFGHIJKLMNOPQRSTUVWXYZ <br/> abcdefghijklmnopqrstuvwxyz <br/> 0123456789",
            btn_text: "click me!"
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main.scss";
</style>
