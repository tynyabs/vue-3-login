<template>
    <div id="login">
        <h1>Login</h1>
        <div class="form-inputs">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" v-model="input.username" placeholder="Username" />
        </div>
        <div class="form-inputs">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <button type="button" @click="login">Login</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: {
        mockAccount: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            if (this.input.username && this.input.password) {
                // Use the passed mockAccount prop
                if (this.input.username === this.mockAccount.username && this.input.password === this.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "Secure" });
                } else {
                    console.log("The username and/or password is incorrect");
                }
            } else {
                console.log("A username and password must be present");
            }
        }
    }
};
</script>

<style>
#login .form-inputs {
    padding-bottom: 10px;
}

#login .form-inputs label {
    padding-right: 10px;
}
</style>