<template>
    <div class="nav-container">
        <section class="is-fullheight is-primary is-bold">
            <!-- Hero header: will stick at the top -->
            <div class="head">
                <nav class="navbar">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img src="/static/construction/WIP.jpg" class="logo" />
                        </a>
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
                            <a class="navbar-item" href="/about">
                                About
                            </a>
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
            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                </div>
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