using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SauryFish.Repository
{
    public class DapperFactory
    {
        public static readonly string _connectionString = "Server=47.94.199.92;Port=3306;Database=sharingpay_attendance;Uid=root;password=AdmiN@2017q;Charset=utf8;";
        public static MySqlConnection CrateMysqlConnection()
        {
            var connection = new MySqlConnection(_connectionString);
            connection.Open();
            return connection;
        }
    }
}
