<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Vue Projesi</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
            <router-link
                to="/"
                tag="li">
                <a class="nav-link" href="javascript:;">
                    Ana Sayfa
                </a>
            </router-link>
            <router-link
                to="/user-add"
                tag="li">
                <a class="nav-link" href="javascript:;">
                    Üye Ekle
                </a>
            </router-link>
            <router-link
                to="/about"
                tag="li">
                <a class="nav-link" href="javascript:;">
                    Hakkımda
                </a>
            </router-link>
            <router-link
                to="/contact"
                tag="li">
                <a class="nav-link" href="javascript:;">
                    İletişim
                </a>
            </router-link>
        </ul>
    </div>
    </nav>
</template>
<script>
export default {
}
</script>