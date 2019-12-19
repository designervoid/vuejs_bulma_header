<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item">
                Logo Image
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <b-icon pack="fas" icon="globe"></b-icon>
                <b-dropdown
                    v-model="navigation"
                    position="is-bottom-left"
                    aria-role="menu">
                    <a
                        class="navbar-item"
                        slot="trigger"
                        role="button">
                        <span>Name</span>
                        <span>Avatar</span>
                    </a>

                    <b-dropdown-item custom aria-role="menuitem">
                        Avatar, Name, Type_of_user
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
                navigation: 'home'
            }
        }
    }
</script>

<style scoped>
</style>
