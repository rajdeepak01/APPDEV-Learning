const Profile = {
    template: 
    `
    <div>
        <h1>My profile </h2>
        <p>Name: {{this.$route.params.username}}</p>
        <p>Login Role: {{$route.query.role}}</p>
    </div>

    `
}

export default Profile;