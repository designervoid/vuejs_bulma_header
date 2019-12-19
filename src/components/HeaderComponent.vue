<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img :src="logo_image" alt="" class="logo">
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="globe-button">
                  <b-icon pack="fas" icon="globe"></b-icon>
                </div>
                <b-dropdown
                    v-model="navigation"
                    position="is-bottom-left"
                    aria-role="menu">
                    <a
                        class="navbar-item"
                        slot="trigger"
                        role="button">
                        <span class="navbar-username">{{ name }}</span>
                        <div>
                          <img :src="avatar" alt="" class="avatar">
                        </div>
                    </a>

                    <b-dropdown-item custom aria-role="menuitem">
                      <div class="columns">
                        <div class="column column-avatar">
                          <img :src="avatar" alt="" class="avatar">
                        </div>
                        <div class="column column-user-info">
                          {{ name }} <br>
                          {{ type_of_user }}
                        </div>
                      </div>
                    </b-dropdown-item>
                    <hr class="dropdown-divider">
                    <b-dropdown-item value="settings" aria-role="menuitem">
                        <b-icon icon="cog"></b-icon>
                        <div class="">
                          Settings
                        </div>
                    </b-dropdown-item>
                    <b-dropdown-item value="package" aria-role="menuitem">
                        <b-icon icon="cubes"></b-icon>
                        Package
                    </b-dropdown-item>
                    <hr class="dropdown-divider" aria-role="menuitem">
                    <b-dropdown-item value="logout" aria-role="menuitem">
                        <b-icon icon="sign-out-alt"></b-icon>
                        Logout
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                navigation: 'home',
                logo_image: 'https://login.leonardo.fund/network-manager/leonardo/logo_full.png',
                name: 'Ilnur',
                avatar: 'https://avatar.leonardo.fund/d1e44c1854aaa74f07fb1b520c44a959.png',
                type_of_user: 'Manager'
            }
        }
    }
</script>

<style scoped>

</style>
