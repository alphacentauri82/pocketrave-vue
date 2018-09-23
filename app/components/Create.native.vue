<template>
  <Page class="pagep">
    <ActionBar class="action-bar" title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
    </ActionBar>
    <StackLayout>
      <Image src="~/assets/images/NativeScript-Vue.png"/>
    </StackLayout>
  </Page>
</template>