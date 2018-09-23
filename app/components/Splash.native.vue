<template>
    <Page class="page">
        <ActionBar title="Draw!">
            <ActionItem  ios.position="right">
                <Button [text]="'fa-home' | fonticon" class="purple fa action-btn"></Button>
            </ActionItem>
        </ActionBar>
    </page>
</template>

<script>
import Home from './components/Home'
export default {
  data() {
    return {
      title: 'Tap you!',
      count: 5,
    }
  },
  created() {
    setInterval(() => {
      this.count = this.count - 1
      if (this.count === 0) {
          this.$navigateTo(Home);
      }
    }, 1000)
  }
 }
</script>

