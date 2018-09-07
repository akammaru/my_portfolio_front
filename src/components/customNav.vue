<template>
    <div class="nav-container">
        <section class="is-fullheight is-primary is-bold">
            <!-- Hero header: will stick at the top -->
            <div class="head">
                <nav class="navbar">
                    <div class="navbar-brand">
                        <router-link class="navbar-item" to="/">
                            <img src="/static/construction/WIP.jpg" class="logo" />
                        </router-link>
                        <!--
                    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
                    -->
                        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <!--
                  Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
                  -->
                    <div class="navbar-menu" :class="{ 'is-active': showNav }">
                        <div class="navbar-end">
                            <router-link class="navbar-item" to="/tracker">
                                Fuel tracker
                            </router-link>
                            <a class="navbar-item" href="/path">
                                Path
                            </a>
                            <a class="navbar-item" href="/blog">
                                Blog
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showNav: false
            }
        }
    }
</script>