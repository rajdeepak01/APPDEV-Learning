const Dashboard = {
    template: 
    `
        <div>
            <h1> Welcome {{this.$route.params.user}} </h1>
            <h4> M.r {{$route.query.role}}</h4>
        </div>
    `
}

export default Dashboard