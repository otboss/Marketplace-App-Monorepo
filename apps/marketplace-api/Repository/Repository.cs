using marketplace_api.Repository;
using Npgsql;


public class Repository {

    private static NpgsqlConnection GetConnection(){
        return new NpgsqlConnection(@"Server=localhost;Port=5432;User Id=admin;Password=postgres;Database=marketplace");
    }
}