<template>
  <Page class="pagep">
    <ActionBar class="action-bar" :title="$route.path">
        <ActionItem @tap="fmodal()" ios.position="right">
          <button></button>
        </ActionItem>
    </ActionBar>
    <StackLayout class="hello-world">
        <Button class="btn btnp" @tap="gotocreate"  text="Create a new PocketRave!"/>
        <Label class='h1' :text="count"/>
      <Label class="body" textWrap=true text="Tghis is a hello world component, tap the button if you dare"/>
      <Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png"/>
    </StackLayout>
  </Page>
</template>

<script>
import HomeBase from './HomeBase'
import Create from './Create.native.vue'

export default {
  mixins: [HomeBase],
  methods: {
    gotocreate () {
      this.$navigateTo(Create);
    },
    fmodal () {
      const vmodal = {
      template: `
        <Page>
        <ActionBar title="Pocketrave"/>
        <StackLayout>
          <label>How to PocketRave</label>
          <label>Create a PocketRave by drawing an image on the drawing pad with your choice of color and pen width. \n\n\n Save your drawing, then choose a song track from Soundcloud on the next screen by searching for a track by name or keyword. \n\n\n  Click a track\'s name to select it for your PocketRave. \n\n\n If you are attending a conference, select the appropriate event on the next screen to view grouped PocketRaves. \n\n\n Your PocketRave will be reviewed, and if it is approved, you can view your completed PocketRaves online at http://pocketrave.me</label>
          <Button @tap="$modal.close" text="Close" />
        </StackLayout>
      </Page>
      `
      };
       this.$showModal(vmodal);

    }
  },
  
}


</script>

<style lang="scss" scoped>
.hello-world {
  margin: 20;
}
.btnp{
  background-color: rgb(74, 10, 77);
  color:white;
  font-size: 15px 
}
.pagep{
  background-color: rgb(162, 104, 175);
  color: white;
}
</style>
