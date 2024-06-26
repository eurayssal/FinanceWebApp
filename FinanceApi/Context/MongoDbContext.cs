using FinanceApi.Models;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace FinanceApi.Context
{
    public class MongoDbContext<T> where T : BaseModel
    {
        public MongoDbContext()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            _database = client.GetDatabase("FinanceWebDb");
        }

        private readonly IMongoDatabase _database;

        private IMongoCollection<T> MongoCollection
        {
            get => _database.GetCollection<T>($"{typeof(T).Name}");
        }

        private IMongoQueryable<T> MongoQueryable => MongoCollection.AsQueryable();

        public async Task InsertAsync(T model, CancellationToken cancellation)
        {
            await MongoCollection.InsertOneAsync(model, null, cancellation);
        }
    }
}
